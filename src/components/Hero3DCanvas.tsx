import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  reducedMotion?: boolean;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ reducedMotion = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLFailed, setWebGLFailed] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(reducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(reducedMotion || mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(reducedMotion || e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [reducedMotion]);

  useEffect(() => {
    if (prefersReduced) return;

    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebGLFailed(true);
      return;
    }

    let animationFrameId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b0a09, 0.002);

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Ring 1: Brushed Champagne Gold (#C5A059) Architectural Arc
    const ring1Geo = new THREE.TorusGeometry(9.2, 0.035, 16, 140);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0xc5a059,
      transparent: true,
      opacity: 0.58,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.1;
    ring1.rotation.y = Math.PI / 7;
    scene.add(ring1);

    // Ring 2: Warm Rose-Bronze (#B88E72) Dimensional Orbit
    const ring2Geo = new THREE.TorusGeometry(12.0, 0.025, 16, 150);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xb88e72,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3.8;
    ring2.rotation.y = Math.PI / 5;
    scene.add(ring2);

    // Ring 3: Silk Champagne Pearl (#E6CFA3) Accent Trajectory
    const ring3Geo = new THREE.TorusGeometry(14.2, 0.018, 16, 160);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xe6cfa3,
      transparent: true,
      opacity: 0.32,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = Math.PI / 2.3;
    ring3.rotation.z = Math.PI / 4;
    scene.add(ring3);

    // Traveling Light Nodes
    const nodeGeo = new THREE.SphereGeometry(0.14, 16, 16);
    const nodeMatYellow = new THREE.MeshBasicMaterial({ color: 0xe6cfa3 });
    const orbitNode1 = new THREE.Mesh(nodeGeo, nodeMatYellow);
    scene.add(orbitNode1);

    const nodeMatBlue = new THREE.MeshBasicMaterial({ color: 0xc5a059 });
    const orbitNode2 = new THREE.Mesh(nodeGeo, nodeMatBlue);
    scene.add(orbitNode2);

    // Controlled Particle Field (220 particles — conservative & refined)
    const particleCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0xc5a059), // Brushed Champagne Gold
      new THREE.Color(0xb88e72), // Warm Rose-Bronze
      new THREE.Color(0xe6cfa3), // Silk Champagne Pearl
      new THREE.Color(0xf6f2ea), // Warm Alabaster Ivory
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = 7 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.85;

      positions[i * 3] = radius * Math.cos(phi) * Math.sin(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi) * Math.cos(theta) - 3;

      // Weight toward Champagne Gold & Rose-Bronze, selective Silk Pearl
      const pick = Math.random();
      const c =
        pick < 0.45
          ? colorPalette[0]
          : pick < 0.8
          ? colorPalette[1]
          : pick < 0.92
          ? colorPalette[2]
          : colorPalette[3];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.13,
      vertexColors: true,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.00045;
      mouseY = (event.clientY - windowHalfY) * 0.00045;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 10;
      camera.position.y = -targetY * 10;
      camera.lookAt(0, 0, 0);

      ring1.rotation.z = elapsedTime * 0.09;
      ring1.rotation.x = Math.PI / 3.1 + Math.sin(elapsedTime * 0.25) * 0.04;

      ring2.rotation.z = -elapsedTime * 0.06;
      ring2.rotation.y = Math.PI / 5 + Math.cos(elapsedTime * 0.2) * 0.03;

      ring3.rotation.y = elapsedTime * 0.04;

      const angle1 = elapsedTime * 0.32;
      orbitNode1.position.set(
        Math.cos(angle1) * 9.2,
        Math.sin(angle1) * 9.2 * Math.cos(ring1.rotation.x),
        Math.sin(angle1) * 9.2 * Math.sin(ring1.rotation.x)
      );

      const angle2 = -elapsedTime * 0.22 + Math.PI;
      orbitNode2.position.set(
        Math.cos(angle2) * 12.0 * Math.cos(ring2.rotation.y),
        Math.sin(angle2) * 12.0 * Math.sin(ring2.rotation.x),
        Math.sin(angle2) * 12.0 * Math.cos(ring2.rotation.x)
      );

      particles.rotation.y = elapsedTime * 0.02 + scrollY * 0.0003;
      particles.rotation.x = elapsedTime * 0.01;

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
      nodeMatYellow.dispose();
      nodeMatBlue.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [prefersReduced]);

  if (prefersReduced || webGLFailed) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-vizora-blue/25 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[740px] h-[740px] rounded-full border border-vizora-purple/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-vizora-yellow/15 pointer-events-none" />
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
