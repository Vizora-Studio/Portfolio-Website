import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  reducedMotion?: boolean;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ reducedMotion = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebGLFailed(true);
      return;
    }

    let animationFrameId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080B18, 0.0018);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent to show dark midnight background
    container.appendChild(renderer.domElement);

    // Orbit Ring 1: Champagne Gold Main Celestial Ring
    const ring1Geo = new THREE.TorusGeometry(8.5, 0.045, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xD9A441,
      transparent: true,
      opacity: 0.75,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.2;
    ring1.rotation.y = Math.PI / 7;
    scene.add(ring1);

    // Orbit Ring 2: Electric Blue Outer Orbit
    const ring2Geo = new THREE.TorusGeometry(11.2, 0.03, 16, 140);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x174BFF,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 5;
    scene.add(ring2);

    // Orbit Ring 3: Fine Violet Inclined Orbit
    const ring3Geo = new THREE.TorusGeometry(13.5, 0.02, 16, 160);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x6D22F5,
      transparent: true,
      opacity: 0.4,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = Math.PI / 2.2;
    ring3.rotation.z = Math.PI / 4;
    scene.add(ring3);

    // Orbit Nodes / Star jewels traveling on ring
    const nodeGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const nodeMatGold = new THREE.MeshBasicMaterial({ color: 0xF5D075 });
    const orbitNode1 = new THREE.Mesh(nodeGeo, nodeMatGold);
    scene.add(orbitNode1);

    const nodeMatBlue = new THREE.MeshBasicMaterial({ color: 0x4D7CFF });
    const orbitNode2 = new THREE.Mesh(nodeGeo, nodeMatBlue);
    scene.add(orbitNode2);

    // Particle Field: Gold, Blue, Violet stardust
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0xD9A441), // Champagne Gold
      new THREE.Color(0xF5D075), // Light Gold
      new THREE.Color(0x174BFF), // Electric Blue
      new THREE.Color(0x6D22F5), // Rich Violet
      new THREE.Color(0xFFFFFF), // Diamond White
    ];

    for (let i = 0; i < particleCount; i++) {
      // Distribute in a spherical cylinder volume around center
      const radius = 6 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.85;

      positions[i * 3] = radius * Math.cos(phi) * Math.sin(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi) * Math.cos(theta) - 2;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x174BFF, 2, 40);
    blueLight.position.set(-10, 8, 10);
    scene.add(blueLight);

    const goldLight = new THREE.PointLight(0xD9A441, 2.5, 40);
    goldLight.position.set(10, -6, 8);
    scene.add(goldLight);

    const violetLight = new THREE.PointLight(0x6D22F5, 1.8, 35);
    violetLight.position.set(0, 10, -5);
    scene.add(violetLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0006;
      mouseY = (event.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll Interaction
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 12;
      camera.position.y = -targetY * 12;
      camera.lookAt(0, 0, 0);

      // Rotate orbit rings at harmonious astronomical intervals
      ring1.rotation.z = elapsedTime * 0.12;
      ring1.rotation.x = Math.PI / 3.2 + Math.sin(elapsedTime * 0.3) * 0.05;

      ring2.rotation.z = -elapsedTime * 0.08;
      ring2.rotation.y = Math.PI / 5 + Math.cos(elapsedTime * 0.2) * 0.04;

      ring3.rotation.y = elapsedTime * 0.05;

      // Position orbit jewel nodes
      const angle1 = elapsedTime * 0.4;
      orbitNode1.position.set(
        Math.cos(angle1) * 8.5,
        Math.sin(angle1) * 8.5 * Math.cos(ring1.rotation.x),
        Math.sin(angle1) * 8.5 * Math.sin(ring1.rotation.x)
      );

      const angle2 = -elapsedTime * 0.28 + Math.PI;
      orbitNode2.position.set(
        Math.cos(angle2) * 11.2 * Math.cos(ring2.rotation.y),
        Math.sin(angle2) * 11.2 * Math.sin(ring2.rotation.x),
        Math.sin(angle2) * 11.2 * Math.cos(ring2.rotation.x)
      );

      // Rotate particle field slowly and respond to scroll
      particles.rotation.y = elapsedTime * 0.03 + scrollY * 0.0004;
      particles.rotation.x = elapsedTime * 0.015;

      // Pulse point lights subtly
      goldLight.intensity = 2.2 + Math.sin(elapsedTime * 1.5) * 0.5;
      blueLight.intensity = 1.8 + Math.cos(elapsedTime * 1.2) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      nodeGeo.dispose();
      nodeMatGold.dispose();
      nodeMatBlue.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [reducedMotion]);

  if (reducedMotion || webGLFailed) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* CSS Fallback Orbit & Cosmic Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-vizora-gold/30 animate-spin-slow pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-vizora-blue/20 animate-spin-reverse pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-vizora-violet/15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-tr from-vizora-blue/20 via-vizora-violet/20 to-vizora-gold/20 rounded-full blur-[80px] pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
