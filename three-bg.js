// Three.js 3D Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

const container = document.getElementById('canvas-container');
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Create Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 700;

const posArray = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 15; // Spread particles
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

// Material
const material = new THREE.PointsMaterial({
    size: 0.02,
    color: 0x2563eb, // Primary color
    transparent: true,
    opacity: 0.8,
});

// Mesh
const particlesMesh = new THREE.Points(particlesGeometry, material);
scene.add(particlesMesh);

// 3D Shape (Icosahedron)
const geometry = new THREE.IcosahedronGeometry(1, 0);
const materialShape = new THREE.MeshBasicMaterial({
    color: 0x6366f1,
    wireframe: true,
    transparent: true,
    opacity: 0.3
});
const sphere = new THREE.Mesh(geometry, materialShape);
scene.add(sphere);

sphere.position.x = 2;
sphere.position.y = 0;

camera.position.z = 5;

// Mouse Interaction
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Animation Loop
const clock = new THREE.Clock();

function animate() {
    const elapsedTime = clock.getElapsedTime();

    // Rotate Shape
    sphere.rotation.y = elapsedTime * 0.2;
    sphere.rotation.x = elapsedTime * 0.1;

    // Rotate Particles
    particlesMesh.rotation.y = -elapsedTime * 0.05;
    particlesMesh.rotation.x = elapsedTime * 0.02;

    // Mouse Parallax
    particlesMesh.rotation.y += mouseX * 0.00005;
    particlesMesh.rotation.x += mouseY * 0.00005;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();

// Handle Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Update colors on theme toggle
const observerTheme = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-theme") {
            const theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                material.color.setHex(0x3b82f6);
                materialShape.color.setHex(0x6366f1);
            } else {
                material.color.setHex(0x2563eb);
                materialShape.color.setHex(0x4f46e5);
            }
        }
    });
});

observerTheme.observe(document.documentElement, {
    attributes: true
});
