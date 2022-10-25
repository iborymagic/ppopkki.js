import * as THREE from "three";
import Game from "./game";
import CardObject from "./card-object";
// import GUI from 'lil-gui';

const game = new Game();

function onSubmit() {
  const textarea = document.getElementById("arr");
  if (!textarea) return;
  try {
    const arr = JSON.parse(textarea.value);
    if (arr.some((item) => typeof item !== "string"))
      throw new Error("입력은 현재 string의 배열만 가능합니다.");

    game.prepareCards(getCardDataListFromStringArr(arr));
    const input = document.getElementById("input");
    if (input) input.style = "display: none;";
  } catch (e) {
    alert(e);
  }
}

window.onSubmit = onSubmit;

function getCardDataListFromStringArr(arr) {
  return arr.map((item, idx) => {
    return {
      name: `card-${idx}`,
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

// const gui = new GUI();
// const obj = {
//   x: 0,
//   y: 0,
//   z: 0,
// }

// gui.add(obj, 'x').onChange((x) => {
//   Object.values(game.cardMap).map(card => card.rotation.x = x / 180 * Math.PI);
// })
// gui.add(obj, 'y').onChange((y) => {
//   Object.values(game.cardMap).map(card => card.rotation.y = y / 180 * Math.PI);
// })
// gui.add(obj, 'z').onChange((z) => {
//   Object.values(game.cardMap).map(card => card.rotation.z = z / 180 * Math.PI);
// })


// game.prepareCards(getCardDataListFromStringArr(['hihi', 'byebye']));

// raycaster
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

const onMouseMove = (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, game.camera);

  const intersects = raycaster.intersectObjects(game.scene.children);

  if (intersects.length > 0) {
    const parent = intersects[0].object.parent;

    if (!parent.name) return;

    if (parent instanceof CardObject) {
      game.onHoverCardObject(parent.name);
    }
    return;
  }
  game.onHoverCardObject(null);
};

const onMouseDown = (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, game.camera);

  const intersects = raycaster.intersectObjects(game.scene.children);

  if (intersects.length > 0) {
    const parent = intersects[0].object.parent;
    if (parent.onClick) parent.onClick();
  }
};
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("mousedown", onMouseDown);
