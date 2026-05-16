"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground({ theme }: { theme: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const materialRef = useRef<THREE.PointsMaterial | null>(null);
  const materialShapeRef = useRef<THREE.MeshBasicMaterial | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

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
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.8,
    });
    materialRef.current = material;

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
    materialShapeRef.current = materialShape;
    const sphere = new THREE.Mesh(geometry, materialShape);
    scene.add(sphere);

    sphere.position.x = 2;
    sphere.position.y = 0;
    camera.position.z = 5;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
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
        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
        if (renderer.domElement.parentNode === container) {
            container.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
        materialShape.dispose();
        particlesGeometry.dispose();
        renderer.dispose();
    };
  }, []);

  // Update effect for theme
  useEffect(() => {
    if (materialRef.current && materialShapeRef.current) {
        if (theme === 'dark') {
            materialRef.current.color.setHex(0x3b82f6);
            materialShapeRef.current.color.setHex(0x6366f1);
        } else {
            materialRef.current.color.setHex(0x2563eb);
            materialShapeRef.current.color.setHex(0x4f46e5);
        }
    }
  }, [theme]);

  return (
    <div 
      id="canvas-container" 
      ref={containerRef} 
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}
    />
  );
}
