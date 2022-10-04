import * as THREE from "three";
import { Object3D } from "three";
import { Card } from "ygo-card";
import cardDataList from "./cards.js";
import TWEEN, { Tween } from "@tweenjs/tween.js";

const scene = new THREE.Scene();

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

// 캔버스 세팅
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 카드 세팅
const cardTexture = new THREE.TextureLoader().load("./yugioh-card-back.jpeg");
cardTexture.wrapS = THREE.RepeatWrapping;
cardTexture.wrapT = THREE.RepeatWrapping;
const cardMaterial = new THREE.MeshLambertMaterial({ map: cardTexture });

// 양면 카드 세팅
const ygoCards = [];
const cards = {};

let hoveredName = null;

cardDataList.forEach(async (cardData, idx) => {
  const canvas = document.createElement("canvas");

  const ygoCard = new Card({
    data: cardData.data,
    canvas,
    size: [400 * window.devicePixelRatio, 584 * window.devicePixelRatio],
    moldPath: "./mold",
    getPic: () => cardData.pic,
  });

  await ygoCard.render();

  const ygoTexture = new THREE.CanvasTexture(canvas);
  const ygoMaterial = new THREE.MeshBasicMaterial({
    map: ygoTexture,
  });

  const cardGeometryFront = new THREE.PlaneGeometry(5, 8);
  const cardGeometryBack = new THREE.PlaneGeometry(5, 8);
  cardGeometryBack.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));

  const card = new Object3D();
  const name = `hi${idx}`;
  card.name = name;
  const cardMeshFront = new THREE.Mesh(cardGeometryFront, ygoMaterial);
  cardMeshFront.name = 'front'
  const cardMeshBack = new THREE.Mesh(cardGeometryBack, cardMaterial);
  cardMeshBack.name = 'back'
  card.add(cardMeshFront);
  card.add(cardMeshBack);

  card.position.set(10 * idx - 10, 0, 0);
  card.rotation.set(0, Math.PI, 0);

  scene.add(card);
  ygoCards.push(card);
  cards[name] = card;
});

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

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// raycaster
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

const onMouseMove = (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const parent = intersects[0].object.parent;
    if (hoveredName !== parent.name) {
      if (hoveredName in cards && 'tween' in cards[hoveredName]) {
        const card = cards[hoveredName];
        card.tween.stop();
        card.tween = new Tween({ scale: card.scale.x }).to({ scale: 1 }, 150).onUpdate(({ scale }) => {
          card.scale.set(scale, scale, scale);
        }).start();
      }

      cards[parent.name].tween = new Tween({ scale: 1 }).to({ scale: 1.1 }, 200).onUpdate(({ scale }) => {
        cards[parent.name].scale.set(scale, scale, scale);
      }).start();
      hoveredName = parent.name;
    }
  }
};

const onMouseDown = () => {
  if(!hoveredName) return;
  const card = cards[hoveredName];
  if(!card) return;

  card.flipTween = new Tween({y: card.rotation.y}).to({y: card.rotation.y + Math.PI}, 200).onUpdate(({y})=>{
    card.rotation.y = y;
  }).start();
  
}
window.addEventListener("mousemove", onMouseMove);
window.addEventListener('mousedown', onMouseDown);

// 그리기
function animate() {
  requestAnimationFrame(animate);

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
  TWEEN.update();
}

animate();
