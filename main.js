import * as THREE from 'three';

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

// 카트 세팅
const cardTexture = new THREE.TextureLoader().load('yugioh-card-back.jpeg');
cardTexture.wrapS = THREE.RepeatWrapping;
cardTexture.wrapT = THREE.RepeatWrapping;
const cardMaterial = new THREE.MeshLambertMaterial({ map: cardTexture });

const cardPlanes = [];

for (let i = 0; i < 5; i++) {
  cardPlanes.push(new THREE.Mesh(new THREE.PlaneGeometry(5, 8), cardMaterial));
}
// cardPlane.overdraw = true;

// cardPlane.rotation.x = -Math.PI / 2;
// cardPlane.rotation.z = -Math.PI / 2;
// cardPlane.rotation.y = -1.5;
cardPlanes.forEach((plane, index) => {
  plane.position.set(-14 + index * 7, 0, 0);
  scene.add(plane);
});

// 조명
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

// 그리기
function animate() {
  requestAnimationFrame(animate);

  cardPlanes.forEach((plane) => {
    plane.rotation.x += 0.005;
    plane.rotation.y += 0.005;
  });

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  renderer.render(scene, camera);
}

animate();
