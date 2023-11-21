import * as THREE from "three";

// Scene
const scene: THREE.Scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfd1e5);

// Light
let hemilight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(hemilight);

// Directional light
let dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-30, 50, -30);
scene.add(dirLight);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.left = -70;
dirLight.shadow.camera.right = 70;
dirLight.shadow.camera.top = 70;
dirLight.shadow.camera.bottom = -70;

export { scene };
