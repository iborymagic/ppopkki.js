import CardObject, { CardObjectProps } from "./card-object";
import * as THREE from "three";
import Deck from "./deck";
import TWEEN, { Tween, Easing } from "@tweenjs/tween.js";
import Nebula from "three-nebula";
import lightEmitter from "./light.json";
import fireEmitter from "./fire.json";
import { SpriteRenderer } from "three-nebula/build/cjs/renderer";

class Game {
  hoveredName: string | null = null;
  hasCardLoaded = false;

  cardMap: Record<string, CardObject>;
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  shakeTween: Tween<{ x: number; y: number; z: number }>;
  renderer: THREE.WebGLRenderer;
  deck: Deck;
  mouse = new THREE.Vector2();
  rayCaster = new THREE.Raycaster();
  glareParticleSystem: any;
  fireParticleSystem: any;

  onHoverCardObject(name: string | null) {
    if (!this.hasCardLoaded) return;

    const beforeName = this.hoveredName;
    if (beforeName !== name) {
      if (name && name in this.cardMap) {
        const card = this.cardMap[name];
        card.onHover();
        if (!card.hasFlipped) {
          this.playBacklightEffect(card.position);
        }
        this.hoveredName = name;
        return;
      }

      if (beforeName && beforeName in this.cardMap) {
        const card = this.cardMap[beforeName];
        this.hoveredName = name;
        card.onUnHover();
        this.removeGlareEffect();
      }
    }
  }
  constructor() {
    const scene = new THREE.Scene();

    // https://threejs.org/docs/#api/en/textures/CanvasTexture

    // 조명: 안보이지 않게 하기위해 여섯 방향에서 다 쏘는중
    const zPosAmbLight = new THREE.DirectionalLight(0xffffff, 1);
    zPosAmbLight.position.set(0, 0, 1);
    scene.add(zPosAmbLight);

    const zNegAmbLight = new THREE.DirectionalLight(0xffffff, 1);
    zNegAmbLight.position.set(0, 0, -1);
    scene.add(zNegAmbLight);

    const yPosAmbLight = new THREE.DirectionalLight(0xffffff, 1);
    yPosAmbLight.position.set(0, 1, 0);
    scene.add(yPosAmbLight);

    const yNegAmbLight = new THREE.DirectionalLight(0xffffff, 1);
    yNegAmbLight.position.set(0, -1, 0);
    scene.add(yNegAmbLight);

    const xPosAmbLight = new THREE.DirectionalLight(0xffffff, 1);
    xPosAmbLight.position.set(1, 0, 0);
    scene.add(xPosAmbLight);

    const xNegAmbLight = new THREE.DirectionalLight(0xffffff, 1);
    xNegAmbLight.position.set(-1, 0, 0);
    scene.add(xNegAmbLight);

    // 카메라 세팅
    const camera = new THREE.OrthographicCamera(
      -window.innerWidth / 45,
      window.innerWidth / 45,
      window.innerHeight / 45,
      -window.innerHeight / 45,
      1,
      1000
    );
    camera.position.set(0, 0, 50);
    camera.lookAt(scene.position);
    camera.updateMatrixWorld();

    const deck = new Deck();
    deck.init();
    scene.add(deck);

    // 캔버스 세팅
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.domElement.setAttribute('style', 'width:100vw;height:100vh;')
    const ctx = renderer.domElement.getContext("2d");
    ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);

    document.body.appendChild(renderer.domElement);

    this.camera = camera;
    this.scene = scene;
    this.camera = camera;
    this.deck = deck;
    this.renderer = renderer;
    this.cardMap = {};
    this.animate = this.animate.bind(this);
    this.animateParticleEffect = this.animateParticleEffect.bind(this);
    this.removeGlareEffect = this.removeGlareEffect.bind(this);
    this.playBacklightEffect = this.playBacklightEffect.bind(this);
  }

  async prepareCards(cardProps: CardObjectProps[]) {
    await Promise.all(
      cardProps.map((cardProp, idx) => {
        const card = new CardObject({
          ...cardProp,
          name: `card-${idx}`,
        });

        this.cardMap[cardProp.name] = card;
        return card.render();
      })
    );

    this.animate();

    this.deck.onClick = async () => {
      const cards = Object.values(this.cardMap);
      cards.forEach((card) => {
        this.scene.add(card);
      });
      this.deck.visible = false;

      await this.pop();
      await Promise.all(cards.map((card) => card.applyYGOFront()));

      this.hasCardLoaded = true;
    };
  }

  async pop() {
    return new Promise<void>((resolve) => {
      Object.entries(this.cardMap).forEach(([name, obj], idx) => {
        obj.visible = true;
        obj.rotationTween = new Tween({
          x: obj.rotation.x,
          y: obj.rotation.y,
          z: obj.rotation.z,
        })
          .to({ x: 0, y: Math.PI, z: 0 })
          .onUpdate(({ x, y, z }) => {
            obj.rotation.x = x;
            obj.rotation.y = y;
            obj.rotation.z = z;
          })
          .onComplete(() => {
            this.deck.resetOnClick();
            obj.applyYGOFront();
          })
          .easing(Easing.Cubic.InOut)
          .start();

        const rad = (Math.PI * 2) / Object.keys(this.cardMap).length;
        const radOffset = Math.PI / 2;

        obj.positionTween = new Tween({
          x: 0,
          y: 0,
          z: 0,
        })
          .to({
            x: 12 * Math.cos(rad * idx + radOffset),
            y: 12 * Math.sin(rad * idx + radOffset),
            z: 0,
          })
          .onUpdate(({ x, y, z }) => {
            obj.position.x = x;
            obj.position.y = y;
            obj.position.z = z;
          })
          .onComplete(() => {
            resolve();
          })

          .easing(Easing.Cubic.InOut)
          .start();
      });
    });
  }

  animate() {
    requestAnimationFrame(this.animate);

    if (resizeRendererToDisplaySize(this.renderer)) {
      const canvas = this.renderer.domElement;
      // this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
    }

    this.renderer.render(this.scene, this.camera);
    TWEEN.update();
  }

  shakeCameraEffect() {
    this.shakeTween = new Tween({
      x: this.camera.position.x,
      y: this.camera.position.y,
      z: this.camera.position.z,
    })
      .to({
        x: this.camera.position.x - 1,
        y: this.camera.position.y + 1,
        z: this.camera.position.z,
      })
      .onUpdate(({ x, y, z }) => {
        this.camera.position.x = x;
        this.camera.position.y = y;
        this.camera.position.z = z;
      })
      .repeat(6)
      .yoyo(true)
      .chain(
        new Tween({
          x: this.camera.position.x,
          y: this.camera.position.y,
          z: this.camera.position.z,
        })
          .to({
            x: this.camera.position.x,
            y: this.camera.position.y,
            z: this.camera.position.z,
          })
          .onUpdate(({ x, y, z }) => {
            this.camera.position.x = x;
            this.camera.position.y = y;
            this.camera.position.z = z;
          })
      )
      .duration(50)
      .start();
  }

  animateParticleEffect(nebula) {
    requestAnimationFrame(() => this.animateParticleEffect(nebula));
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

  playBacklightEffect(cardPosition) {
    Nebula.fromJSONAsync(lightEmitter.particleSystemState, THREE).then(
      (system) => {
        this.glareParticleSystem = system;
        const nebulaRenderer = new SpriteRenderer(this.scene, THREE);
        const nebula = system.addRenderer(nebulaRenderer);
        system.emitters.forEach((emitter, idx) => {
          emitter.setPosition({
            x: cardPosition.x,
            y: cardPosition.y - (idx - 1) * 3,
            z: cardPosition.z - 8,
          });
        });

        this.animateParticleEffect(nebula);
      }
    );
  }

  playFireEffect(cardPosition) {
    Nebula.fromJSONAsync(fireEmitter.particleSystemState, THREE).then(
      (system) => {
        this.fireParticleSystem = system;
        const nebulaRenderer = new SpriteRenderer(this.scene, THREE);
        const nebula = system.addRenderer(nebulaRenderer);
        system.emitters.forEach((emitter) => {
          emitter.setPosition({
            x: cardPosition.x + 3,
            y: cardPosition.y - 5,
            z: cardPosition.z - 2,
          });
        });

        this.animateParticleEffect(nebula);
      }
    );
  }
}

function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

export default Game;
