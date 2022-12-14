import * as THREE from "three";
import Game from "./game";
import CardObject from "./card-object";
import { merge } from "lodash-es";
import React from "react";
import Input from "./input";

import { createRoot } from "react-dom/client";
// import GUI from 'lil-gui';

const game = new Game();
const root = createRoot(document.querySelector("div#input"));
root.render(<Input></Input>);

function onSubmit(formResult) {
  try {
    const { cardInfos, n } = formResult;
    game.prepareCards(getCardDataListFromStringArr(cardInfos, n));
    const input = document.getElementById("input");
    if (input) input.style = "display: none;";
  } catch (e) {
    alert(e);
  }
}

window.onSubmit = onSubmit;

function getCardDataListFromStringArr(arr, n) {
  return arr
    .sort(() => Math.random() - 0.5)
    .slice(0, n)
    .map((item, idx) => {
      return merge(
        {
          name: `card-${idx}`,
          data: {
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
        },
        item
      );
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

const setGuideText = (text) => {
  const guide = document.querySelector('#guide-text')
  if (!guide) return;
  guide.innerHTML = text;
}

window.setGuideText = setGuideText;

const onMouseMove = (e) => {
  if (e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  }
  raycaster.setFromCamera(mouse, game.camera);

  const intersects = raycaster.intersectObjects(game.scene.children);

  if (!game.hasCardLoaded) return;

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
    if (parent.onClick) {
      if (parent instanceof CardObject) {
        if (!game.hasCardLoaded || parent.hasFlipped) return;

        game.removeGlareEffect();
        game.shakeCameraEffect();
        game.playFireEffect(parent.position);
      }
      parent.onClick();
    }
  }
};

window.setInterval(() => {
  if (!raycaster.intersectObjects(game.scene.children).length) {
    Object.values(game.cardMap).forEach((cardMap) => {
      if (!cardMap.glareParticleSystem) return;
      cardMap.onUnHover();
      game.removeGlareEffect();
    });
  }
}, 1000);

window.onMouseMove = onMouseMove;
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("mousedown", onMouseDown);
