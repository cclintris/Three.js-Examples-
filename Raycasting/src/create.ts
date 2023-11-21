import * as THREE from "three";
import { scene } from "./sceneManager";

// Create ground
const createGround = () => {
  let pos = { x: 0, y: -1, z: 3 };
  let scale = { x: 100, y: 2, z: 100 };

  let blockPlane = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshPhongMaterial({ color: 0xf9c834 })
  );
  blockPlane.position.set(pos.x, pos.y, pos.z);
  blockPlane.scale.set(scale.x, scale.y, scale.z);
  blockPlane.castShadow = true;
  blockPlane.receiveShadow = true;

  scene.add(blockPlane);

  blockPlane.userData.ground = true;
  blockPlane.userData.draggable = false;
  blockPlane.userData.name = "GROUND";
};

// Create box
const createBox = () => {
  let scale = { x: 6, y: 6, z: 6 };
  let pos = { x: 15, y: scale.y / 2, z: 15 };

  let box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshPhongMaterial({ color: 0xdc143c })
  );
  box.position.set(pos.x, pos.y, pos.z);
  box.scale.set(scale.x, scale.y, scale.z);
  box.castShadow = true;
  box.receiveShadow = true;

  scene.add(box);

  box.userData.draggable = true;
  box.userData.name = "BOX";
};

// Create sphere
const createSphere = () => {
  let radius = 4;
  let pos = { x: 15, y: radius, z: -15 };

  const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, 32, 32),
    new THREE.MeshPhongMaterial({ color: 0x43a1f4 })
  );
  sphere.position.set(pos.x, pos.y, pos.z);
  sphere.castShadow = true;
  sphere.receiveShadow = true;

  scene.add(sphere);

  sphere.userData.draggable = true;
  sphere.userData.name = "SPHERE";
};

// Create cylinder
const createCylinder = () => {
  let radius = 4;
  let height = 6;
  let pos = { x: -15, y: height / 2, z: 15 };

  let cylinder = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(radius, radius, height, 32),
    new THREE.MeshPhongMaterial({ color: 0x90ee90 })
  );
  cylinder.position.set(pos.x, pos.y, pos.z);
  cylinder.castShadow = true;
  cylinder.receiveShadow = true;

  scene.add(cylinder);

  cylinder.userData.draggable = true;
  cylinder.userData.name = "CYLINDER";
};

export { createGround, createBox, createSphere, createCylinder };
