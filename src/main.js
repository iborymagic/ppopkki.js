import * as THREE from "three";
import { Object3D } from "three";
import { Card } from "ygo-card";
import cardDataList from "./cards.js";

const scene = new THREE.Scene();

// 카메라 세팅
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 50);
camera.lookAt(0, 0, 0);

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
  const cardMeshFront = new THREE.Mesh(cardGeometryFront, ygoMaterial);
  const cardMeshBack = new THREE.Mesh(cardGeometryBack, cardMaterial);
  card.add(cardMeshFront);
  card.add(cardMeshBack);

  card.position.set(10 * idx - 10, 0, 0);

  scene.add(card);
  ygoCards.push(card);
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
  const width = canvas.clientWidth * window.devicePixelRatio;
  const height = canvas.clientHeight * window.devicePixelRatio;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// 그리기
function animate() {
  requestAnimationFrame(animate);

  // 카드 회전
  ygoCards.forEach((card) => {
    card.rotation.y += 0.02;
  });

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
}

animate();
