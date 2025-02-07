import * as THREE from 'three';
import { OrbitControls } from './OrbitControls.js'; // Correct import path (relative)
import TWEEN from 'tween.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);  // Now works correctly

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Rose Petals
function createPetalShape(u, v) {
    const scale = 0.8;
    const radius = 1;
    const angle = v * Math.PI * 2;
    const z = scale * radius * Math.cos(angle) * Math.sin(u * Math.PI);
    const x = scale * radius * Math.sin(angle) * Math.sin(u * Math.PI);
    const y = scale * radius * Math.cos(u * Math.PI);
    return new THREE.Vector3(x, y, z);
}

const petalGeometry = new THREE.ParametricGeometry(createPetalShape, 32, 32);
const petalMaterial = new THREE.MeshPhongMaterial({
    color: 0xff69b4,
    flatShading: false,
    shininess: 30
});
const petals = new THREE.Group();

for (let i = 0; i < 12; i++) {
    const petal = new THREE.Mesh(petalGeometry, petalMaterial);
    petal.scale.set(0.6, 0.8, 0.4);
    petal.rotation.y = i * Math.PI / 6;
    petal.position.y = -0.5 + i * 0.1;
    petals.add(petal);
}
scene.add(petals);

// Stem
const stemGeometry = new THREE.CylinderGeometry(0.08, 0.12, 4, 32);
const stemMaterial = new THREE.MeshPhongMaterial({ color: 0x228b22 });
const stem = new THREE.Mesh(stemGeometry, stemMaterial);
stem.position.y = -2;
scene.add(stem);

// Leaves
const leafGeometry = new THREE.PlaneGeometry(0.8, 0.4);
const leafMaterial = new THREE.MeshPhongMaterial({ color: 0x228b22, side: THREE.DoubleSide });

const createLeaf = (x, y, rotation) => {
    const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
    leaf.position.set(x, y, 0);
    leaf.rotation.z = rotation;
    return leaf;
};

scene.add(createLeaf(0.4, -1.2, Math.PI / 4));
scene.add(createLeaf(-0.4, -1.2, -Math.PI / 4));
scene.add(createLeaf(0, -0.7, 0));

// Butterfly
const butterflyGeometry = new THREE.BoxGeometry(0.4, 0.08, 0.8);
const butterflyMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });
const butterfly = new THREE.Mesh(butterflyGeometry, butterflyMaterial);

const wingGeometry = new THREE.PlaneGeometry(0.4, 0.6);
const wingMaterial = new THREE.MeshPhongMaterial({
    color: 0xffd700,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.7
});
const leftWing = new THREE.Mesh(wingGeometry, wingMaterial);
leftWing.position.set(-0.25, 0.2, 0.4);
butterfly.add(leftWing);

const rightWing = new THREE.Mesh(wingGeometry, wingMaterial);
rightWing.position.set(0.25, 0.2, 0.4);
rightWing.scale.x = -1;
butterfly.add(rightWing);

scene.add(butterfly);

camera.position.z = 5;
controls.target.set(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    TWEEN.update();

    petals.rotation.y += 0.005;

    renderer.render(scene, camera);
}

const butterflyTween = new TWEEN.Tween(butterfly.position)
    .to({ x: -2, y: 1, z: 2 }, 3000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .yoyo(true)
    .repeat(Infinity);
butterflyTween.start();

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});