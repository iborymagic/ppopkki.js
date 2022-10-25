import CardObject, { CardObjectProps } from "./card-object";
import * as THREE from 'three';
import Deck from "./deck";
import TWEEN, { Tween } from '@tweenjs/tween.js';

class Game {

  hoveredName?: string;

  cardMap: Record<string, CardObject>;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  deck: Deck;
  mouse = new THREE.Vector2();
  rayCaster = new THREE.Raycaster();

  onHoverCardObject(name: string) {
    if (this.hoveredName !== name && name in this.cardMap) {
      const card = this.cardMap[name];
      if (card.scaleTween) {
        card.scaleTween.stop();
        card.scaleTween = new Tween({ scale: card.scale.x })
          .to({ scale: 1 }, 150)
          .onUpdate(({ scale }) => {
            card.scale.set(scale, scale, scale);

            const outline = card.children.find(
              (child) => child.type === "LineSegments"
            );
            if (outline) outline.visible = false;
          })
          .start();
      }

      card.scaleTween = new Tween({ scale: 1 })
        .to({ scale: 1.1 }, 200)
        .onUpdate(({ scale }) => {
          card.scale.set(scale, scale, scale);

          const outline = card.children.find(
            (child) => child.type === "LineSegments"
          );
          if (outline) outline.visible = true;
        })
        .start();
      this.hoveredName = name;
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
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
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
    document.body.appendChild(renderer.domElement);

    this.camera = camera;
    this.scene = scene;
    this.camera = camera;
    this.deck = deck;
    this.renderer = renderer;
    this.cardMap = {};
    this.animate = this.animate.bind(this)

  }

  async prepareCards(cardProps: CardObjectProps[]) {
    await Promise.all(
      cardProps.map((cardProp, idx) => {
        const card = new CardObject({
          ...cardProp,
          name: `card-${idx}`
        });

        // card.visible = false;
        this.cardMap[cardProp.name] = card;
        return card.render();
      }));
    Object.values(this.cardMap).forEach(card => {
      this.scene.add(card);
    })
    this.animate();
  }

  pop() {
    this.deck.visible = false;
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
        .start();
    });
  }

  animate() {
    requestAnimationFrame(this.animate);

    if (resizeRendererToDisplaySize(this.renderer)) {
      const canvas = this.renderer.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }

    this.renderer.render(this.scene, this.camera);
    TWEEN.update();
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