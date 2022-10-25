import { Object3D } from "three";
import * as THREE from "three";
import { Mesh } from "three";

class Deck extends Object3D {
    deck: THREE.Mesh;
    onClick: () => void;
    onHover: () => void;
   
    init() {

        // 카드 세팅
        const cardTexture = new THREE.TextureLoader().load("./yugioh-card-back.jpeg");
        cardTexture.wrapS = THREE.RepeatWrapping;
        cardTexture.wrapT = THREE.RepeatWrapping;
        const cardMaterial = new THREE.MeshLambertMaterial({ map: cardTexture });

        // 초기 박스 세팅
        const geometry = new THREE.BoxGeometry(5, 1, 8);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const material = new THREE.MeshBasicMaterial({ map: cardTexture });
        const deck = new THREE.Mesh(geometry, material);
        this.deck = deck;
        this.name = "deck"
        this.add(deck);
        this.setRotationFromEuler(
            new THREE.Euler(Math.atan(1 / Math.sqrt(2)), Math.PI / 4, 0, "XYZ")
          );
    }
}

export default Deck;