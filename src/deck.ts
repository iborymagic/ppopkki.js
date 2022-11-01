import { Object3D } from "three";
import * as THREE from "three";

export const isometicDegree = Math.atan(1 / Math.sqrt(2));
class Deck extends Object3D {
  deck: THREE.Mesh;
  onClick: () => void;
  onHover: () => void;

  init() {
    // 카드 세팅
    const cardTexture = new THREE.TextureLoader().load(
      "./yugioh-card-back.jpeg"
    );
    cardTexture.wrapS = THREE.RepeatWrapping;
    cardTexture.wrapT = THREE.RepeatWrapping;
    const cardMaterial = new THREE.MeshLambertMaterial({ map: cardTexture });

    // 초기 박스 세팅
    const scale = 1.3;
    const geometry = new THREE.BoxGeometry(5 * scale, 1 * scale, 8 * scale);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const material = new THREE.MeshBasicMaterial({ map: cardTexture });
    const deck = new THREE.Mesh(geometry, material);
    this.deck = deck;
    this.name = "deck";
    this.add(deck);
    this.setRotationFromEuler(
      new THREE.Euler(isometicDegree, isometicDegree, 0, "XYZ")
    );
  }

  resetOnClick() {
    this.onClick = () => {};
  }
}

export default Deck;
