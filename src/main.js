import * as THREE from "three";
import { Object3D } from "three";
import { Card } from "ygo-card";
import TWEEN, { Tween } from "@tweenjs/tween.js";

console.log("hi");

function onSubmit() {
  const textarea = document.getElementById("arr");
  if (!textarea) return;
  try {
    const arr = JSON.parse(textarea.value);
    if (arr.some((item) => typeof item !== "string"))
      throw new Error("입력은 현재 string의 배열만 가능합니다.");

    startGameWithStringArr(arr);
    const input = document.getElementById("input");
    if (input) input.style = "display: none;";
  } catch (e) {
    alert(e);
  }
}

window.onSubmit = onSubmit;

function getCardDataListFromStringArr(arr) {
  return arr.map((item) => {
    return {
      data: {
        name: item,
        _id: "59438930",
        type: "monster",
        type2: "effect",
        type3: "tuner",
        attribute: "light",
        level: 3,
        lang: "en",
        race: "Psychic",
        desc: 'When a monster on the field activates its effect, or when a Spell/Trap that is already face-up on the field activates its effect (Quick Effect): You can send this card from your hand or field to the GY; destroy that card on the field. You can only use this effect of "Ghost Ogre & Snow Rabbit" once per turn',
        attack: 0,
        defend: 1800,
      },
      pic: "./me.jpeg",
    };
  });
}

async function startGameWithStringArr(arr) {
  const cardDataList = getCardDataListFromStringArr(arr);
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
  const cards = {};

  let hoveredName = null;

  await Promise.all(
    cardDataList.map(async (cardData, idx) => {
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

      const name = `card${idx}`;
      card.name = name;
      const cardMeshFront = new THREE.Mesh(cardGeometryFront, ygoMaterial);
      cardMeshFront.name = "front";
      const cardMeshBack = new THREE.Mesh(cardGeometryBack, cardMaterial);
      cardMeshBack.name = "back";

      card.add(cardMeshFront);
      card.add(cardMeshBack);

      const outline = new THREE.LineSegments(
        new THREE.EdgesGeometry(cardGeometryBack),
        new THREE.LineBasicMaterial({ color: 0x00ff00 })
      );
      outline.visible = false;
      card.add(outline);

      card.position.set(10 * idx - 10, 0, 0);
      card.rotation.set(0, Math.PI, 0);

      scene.add(card);
      cards[name] = card;
    })
  );

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

  console.log(cards);

  const onMouseMove = (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const parent = intersects[0].object.parent;
      if (hoveredName !== parent.name) {
        if (hoveredName in cards && "tween" in cards[hoveredName]) {
          const card = cards[hoveredName];
          card.tween.stop();
          card.tween = new Tween({ scale: card.scale.x })
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

        cards[parent.name].tween = new Tween({ scale: 1 })
          .to({ scale: 1.1 }, 200)
          .onUpdate(({ scale }) => {
            cards[parent.name].scale.set(scale, scale, scale);

            const outline = cards[parent.name].children.find(
              (child) => child.type === "LineSegments"
            );
            if (outline) outline.visible = true;
          })
          .start();
        hoveredName = parent.name;
      }
    }
  };

  const onMouseDown = () => {
    if (!hoveredName) return;
    const card = cards[hoveredName];
    if (!card) return;

    card.flipTween = new Tween({ y: card.rotation.y })
      .to({ y: card.rotation.y + Math.PI }, 200)
      .onUpdate(({ y }) => {
        card.rotation.y = y;
      })
      .start();
  };
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mousedown", onMouseDown);

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
}
