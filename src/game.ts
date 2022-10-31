import CardObject, { CardObjectProps } from "./card-object";
import * as THREE from "three";
import Deck from "./deck";
import TWEEN, { Tween, Easing } from "@tweenjs/tween.js";

class Game {
  hoveredName: string | null = null;
  hasCardSettingCompleted = false;

  cardMap: Record<string, CardObject>;
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera; // camera tween으로 shake 효과 만들어보기
  shakeTween: Tween<{ x: number; y: number; z: number }>;
  renderer: THREE.WebGLRenderer;
  deck: Deck;
  mouse = new THREE.Vector2();
  rayCaster = new THREE.Raycaster();

  onHoverCardObject(name: string | null) {
    const beforeName = this.hoveredName;
    if (beforeName !== name) {
      if (name && name in this.cardMap) {
        const card = this.cardMap[name];
        if (this.hasCardSettingCompleted) {
          card.onHover(this.scene);
        }
        this.hoveredName = name;
        return;
      }

      if (beforeName && beforeName in this.cardMap) {
        const card = this.cardMap[beforeName];
        this.hoveredName = name;
        card.onUnHover();
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

    this.deck.onClick = () => {
      Object.values(this.cardMap).forEach((card) => {
        this.scene.add(card);
      });
      this.deck.visible = false;
      this.pop();
    };
  }

  pop() {
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
          this.hasCardSettingCompleted = true;
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
        .easing(Easing.Cubic.InOut)
        .start();
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
