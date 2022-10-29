import { Tween, Easing } from "@tweenjs/tween.js";
import * as THREE from "three";
import { Object3D } from "three";
import { Card, CardProps } from "ygo-card";
import { isometicDegree } from "./deck";
import Nebula from "three-nebula";
import emitter from "./light.json";
import { SpriteRenderer } from "three-nebula/build/cjs/renderer";

export type CardObjectProps = CardProps & { pic: string; name: string };

export function yugiohCardTextureFactory(): THREE.Texture {
  // 카드 세팅
  const cardTexture = new THREE.TextureLoader().load("./yugioh-card-back.jpeg");
  cardTexture.wrapS = THREE.RepeatWrapping;
  cardTexture.wrapT = THREE.RepeatWrapping;
  return cardTexture;
}

class CardObject extends Object3D {
  props: CardObjectProps;
  outline: THREE.LineSegments;
  glareParticleSystem: any;
  scaleTween: Tween<{ scale: number }>;
  rotationTween: Tween<{ x: number; y: number; z: number }>;
  positionTween: Tween<{ x: number; y: number; z: number }>;
  flipTween: Tween<{ y: number }>;
  meshFront: THREE.Mesh;

  constructor(cardProps: CardObjectProps) {
    super();
    this.props = cardProps;
    this.name = this.props.name;
    this.animateGlareEffect = this.animateGlareEffect.bind(this);
    this.removeGlareEffect = this.removeGlareEffect.bind(this);
  }

  animateGlareEffect(nebula) {
    requestAnimationFrame(() => this.animateGlareEffect(nebula));
    nebula.update();
  }

  removeGlareEffect() {
    if (this.glareParticleSystem) {
      this.glareParticleSystem.emitters.forEach((emitter) => {
        emitter.stopEmit();
        emitter.particles.forEach((particle) => {
          particle.target.removeFromParent();
          particle.destroy();
        });
      });

      this.glareParticleSystem = null;
    }
  }

  onHover(scene: THREE.Scene) {
    this.scaleTween = new Tween({ scale: 1 })
      .to({ scale: 1.2 }, 200)
      .onUpdate(({ scale }) => {
        this.scale.set(scale, scale, scale);
        this.outline.visible = true;
      })
      .start();

    Nebula.fromJSONAsync(emitter.particleSystemState, THREE).then((system) => {
      this.glareParticleSystem = system;
      const nebulaRenderer = new SpriteRenderer(scene, THREE);
      const nebula = system.addRenderer(nebulaRenderer);
      system.emitters.forEach((emitter, idx) => {
        emitter.setPosition({
          x: this.position.x,
          y: this.position.y - (idx - 1) * 3, // particle emitter 적절한 위치 찾아보기
          z: this.position.z - 8,
        });
      });

      this.animateGlareEffect(nebula);
    });
  }

  onUnHover() {
    if (this.scaleTween) {
      this.scaleTween.stop();
      this.scaleTween = new Tween({ scale: this.scale.x })
        .to({ scale: 1 }, 150)
        .onUpdate(({ scale }) => {
          this.scale.set(scale, scale, scale);
          this.outline.visible = false;
        })
        .start();
    }

    this.removeGlareEffect();
  }

  onClick() {
    console.log("card clicked!");
    this.removeGlareEffect();

    console.log(this.props)

    this.flipTween = new Tween({ y: this.rotation.y })
      .to({ y: this.rotation.y + Math.PI * 3 }, 200)
      .onUpdate(({ y }) => {
        this.rotation.y = y;
      })
      .duration(1100)
      // http://tweenjs.github.io/tween.js/examples/03_graphs.html
      .start().easing(Easing.Quadratic.InOut);
  }

  async applyYGOFront() {
    const canvas = document.createElement("canvas");
    const ygoCard = new Card({
      data: this.props.data,
      canvas,
      size: [400 * window.devicePixelRatio, 584 * window.devicePixelRatio],
      moldPath: "./mold",
      getPic: () => this.props.pic,
    });

    const ygoTexture = new THREE.CanvasTexture(canvas);
    await ygoCard.render();

    const ygoMaterial = new THREE.MeshBasicMaterial({
      map: ygoTexture,
    });

    this.meshFront.material = ygoMaterial;
  }

  async render() {
    const scale = 1.5;
    const cardGeometryFront = new THREE.PlaneGeometry(5 * scale, 8 * scale);
    const cardGeometryBack = new THREE.PlaneGeometry(5 * scale, 8 * scale);
    cardGeometryBack.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));

    const cardMaterial = new THREE.MeshLambertMaterial({
      map: yugiohCardTextureFactory(),
    });
    const cardMeshFront = new THREE.Mesh(cardGeometryFront, cardMaterial);
    this.meshFront = cardMeshFront;
    cardMeshFront.name = "front";
    const cardMeshBack = new THREE.Mesh(cardGeometryBack, cardMaterial);
    cardMeshBack.name = "back";

    this.add(cardMeshFront);
    this.add(cardMeshBack);

    const outline = new THREE.LineSegments(
      new THREE.EdgesGeometry(cardGeometryBack),
      new THREE.LineBasicMaterial({ color: 0x00ff00 })
    );
    outline.visible = false;
    this.outline = outline;
    this.add(outline);

    // card.position.set(
    //   12 * Math.cos(rad * idx + radOffset),
    //   12 * Math.sin(rad * idx + radOffset),
    //   0
    // );
    this.rotation.set(isometicDegree + Math.PI / 2, 0, -isometicDegree);
    // this.setRotationFromEuler(
    // new THREE.Euler(0, Math.PI / 4, 0, "XYZ")
    // );
  }
}
export default CardObject;
