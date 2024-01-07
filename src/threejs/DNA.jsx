import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const DNAHelix = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disable zooming

    const points = 1000;
    const radius = 15;
    const gap = 8;  // Increased gap between helices
    const helixColor = new THREE.Color(0x3F1651);

    const helix1 = createHelixStrand(points, radius, helixColor, 0, -gap / 2);
    const helix2 = createHelixStrand(points, radius, helixColor, Math.PI, gap / 2);

    scene.add(helix1);
    scene.add(helix2);

    const linesMaterial = new THREE.LineBasicMaterial({ color: helixColor, linewidth: 6 }); // Increased linewidth
    const linesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(points * 3 * 2);

    for (let i = 0; i < points; i++) {
      const index = i * 6;
      positions.set([helix1.geometry.attributes.position.getX(i), helix1.geometry.attributes.position.getY(i), helix1.geometry.attributes.position.getZ(i),
                     helix2.geometry.attributes.position.getX(i), helix2.geometry.attributes.position.getY(i), helix2.geometry.attributes.position.getZ(i)], index);
    }

    linesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    const dnaGroup = new THREE.Group();
    dnaGroup.add(helix1, helix2, linesMesh);
    dnaGroup.position.x = 30; // Adjust this value to move the DNA group to the right
    scene.add(dnaGroup);

    dnaGroup.rotation.z = -0.3; // Tilt the DNA structure
    dnaGroup.rotation.x = 0.2;  // Additional rotation for better visibility

    const animate = () => {
      requestAnimationFrame(animate);
      dnaGroup.rotation.y += 0.005;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
      helix1.geometry.dispose();
      helix1.material.dispose();
      helix2.geometry.dispose();
      helix2.material.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

function createHelixStrand(points, radius, color, phaseOffset, xOffset) {
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array(points * 3);

  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 8 + phaseOffset;
    const x = Math.sin(angle) * radius + xOffset;
    const y = (i - points / 2) * 0.2;
    const z = Math.cos(angle) * radius;
    vertices[i * 3] = x;
    vertices[i * 3 + 1] = y;
    vertices[i * 3 + 2] = z;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  const material = new THREE.PointsMaterial({ color, size: 0.2 });
  return new THREE.Points(geometry, material);
}

export default DNAHelix;
