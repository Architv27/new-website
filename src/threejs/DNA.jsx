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

    const points = 1000;
    const radius = 10;
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.2,
    });

    const helix1 = createHelixStrand(points, radius, particleMaterial, 0);
    const helix2 = createHelixStrand(points, radius, particleMaterial, Math.PI);

    scene.add(helix1);
    scene.add(helix2);

    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 1, // This property is not always supported by all browsers/platforms
    });

    const linesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(points * 3 * 2); // *2 because each line has two vertices
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    for (let i = 0; i < points; i++) {
      const index = i * 6;
      const position1 = helix1.geometry.attributes.position;
      const position2 = helix2.geometry.attributes.position;
      positions.set([
        position1.getX(i), position1.getY(i), position1.getZ(i),
        position2.getX(i), position2.getY(i), position2.getZ(i)
      ], index);
    }

    linesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const lineSegments = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lineSegments);

    const animate = () => {
      requestAnimationFrame(animate);
      helix1.rotation.y += 0.005;
      helix2.rotation.y += 0.005;
      lineSegments.rotation.y += 0.005;
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
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

function createHelixStrand(points, radius, material, phaseOffset) {
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array(points * 3);

  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 8 + phaseOffset;
    const x = Math.sin(angle) * radius;
    const y = (i - points / 2) * 0.2;
    const z = Math.cos(angle) * radius;
    vertices[i * 3] = x;
    vertices[i * 3 + 1] = y;
    vertices[i * 3 + 2] = z;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  return new THREE.Points(geometry, material);
}

export default DNAHelix;

