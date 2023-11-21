import * as THREE from "three";

// Camera
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  1,
  1500
);

camera.position.set(-35, 70, 200);
camera.lookAt(new THREE.Vector3(0, 0, 0));

export { camera };
