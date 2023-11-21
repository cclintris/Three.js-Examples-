import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { scene } from "./sceneManager";
import { camera } from "./cameraManager";
import {
  createGround,
  createBox,
  createCylinder,
  createSphere,
} from "./create";

// Renderer
const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Window resize handling
const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener("resize", onWindowResize);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

const animate = () => {
  drag();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

// Raycasting
const raycaster = new THREE.Raycaster(); // create once
const clickMouse = new THREE.Vector2(); // create once
const moveMouse = new THREE.Vector2(); // create once
let draggable: THREE.Object3D;

function intersect(pos: THREE.Vector2) {
  raycaster.setFromCamera(pos, camera);
  return raycaster.intersectObjects(scene.children);
}

window.addEventListener("click", (event) => {
  if (draggable != null) {
    console.log(`dropping draggable ${draggable.userData.name}`);
    draggable = null as any;
    return;
  }

  clickMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  clickMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  const found = intersect(clickMouse);
  console.log(found);
  if (found.length > 0) {
    if (found[0].object.userData.draggable) {
      draggable = found[0].object;
      console.log(`found draggable ${draggable.userData.name}`);
    }
  }
});

window.addEventListener("mousemove", (e) => {
  moveMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  moveMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

const drag = () => {
  if (draggable != null) {
    const found = intersect(moveMouse);
    if (found.length > 0) {
      for (let o of found) {
        if (!o.object.userData.ground) continue;

        let { x, z } = o.point;
        draggable.position.x = x;
        draggable.position.z = z;
      }
    }
  }
};

animate();

createGround();
createBox();
createCylinder();
createSphere();
