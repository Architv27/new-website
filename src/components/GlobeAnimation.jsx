// GlobeAnimation.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const GlobeAnimation = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 6); // Set camera distance

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    // Set up lights
    const light1 = new THREE.PointLight(0x5a54ff, 0.75);
    light1.position.set(-150, 150, -50);
    const light2 = new THREE.PointLight(0x4158f6, 0.75);
    light2.position.set(-400, 200, 150);
    const light3 = new THREE.PointLight(0x803bff, 0.7);
    light3.position.set(100, 250, -100);
    scene.add(light1, light2, light3);

    // Set up atmosphere
    const atmosphereShader = {
      uniforms: {},
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize( normalMatrix * normal );
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow( 0.99 - dot( vNormal, vec3( 0, 0, 1.0 ) ), 6.0 );
          gl_FragColor = vec4( .28, .48, 1.0, 1.0 ) * intensity;
        }
      `,
    };
    const atmosphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(atmosphereShader.uniforms),
      vertexShader: atmosphereShader.vertexShader,
      fragmentShader: atmosphereShader.fragmentShader,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    atmosphere.scale.set(1.05, 1.05, 1.05);
    scene.add(atmosphere);

    // Set up globe
    const sphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const sphereMaterial = new THREE.MeshLambertMaterial({
      color: 0xeeeeee,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    sphere.scale.set(1.3, 1.3, 1.3); // Increase the size of the sphere
    scene.add(sphere);

    // Set up map overlay
    const loader = new THREE.TextureLoader();
    const overlayMaterial = new THREE.MeshBasicMaterial({
      map: loader.load('https://i.imgur.com/JLFp6Ws.png'),
      transparent: true,
    });
    const overlaySphereGeometry = new THREE.SphereGeometry(2, 64, 64);
    const overlaySphere = new THREE.Mesh(overlaySphereGeometry, overlayMaterial);
    overlaySphere.castShadow = true;
    overlaySphere.receiveShadow = true;
    overlaySphere.scale.set(1, 1, 1); // Increase the size of the overlay sphere
    sphere.add(overlaySphere);

    // Define the createCurve function
    const createCurve = (start, middle, end) => {
      const curve = new THREE.QuadraticBezierCurve3(start, middle, end);
      const tubeGeometry = new THREE.TubeGeometry(curve, 100, 0.01, 20, false);
      const curveMesh = new THREE.Mesh(tubeGeometry, new THREE.MeshBasicMaterial({ color: 0xd965fa }));
      sphere.add(curveMesh);
    };

    // Predefined positions for bezier curves representing different cities
    const positions = [
      { start: new THREE.Vector3(0, 1.5, 1.3), middle: new THREE.Vector3(0.6, 0.6, 3.2), end: new THREE.Vector3(1.5, -1, 0.8) }, // correct
      { start: new THREE.Vector3(0, -1.5, -1.3), middle: new THREE.Vector3(0.6, -0.6, -3.2), end: new THREE.Vector3(-1.5, 1, -0.8) }, // correct
    ];

    const createRandomCurve = () => {
      // Pick a random position set
      const randomPosition = positions[Math.floor(Math.random() * positions.length)];
      createCurve(randomPosition.start, randomPosition.middle, randomPosition.end);
    };

    // Initial tube generation
    for (let i = 0; i < 3; i++) {
      createRandomCurve();
    }

    // Set up spires
    const cylinderGeometry = new THREE.CylinderGeometry(.01, .01, 4.25, 32);
    const cylinderMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ddff,
      transparent: true,
      opacity: .5,
    });

    const cylinders = [];

    const createCylinder = (rotation) => {
      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      sphere.add(cylinder);
      cylinder.rotation.set(rotation.x, rotation.y, rotation.z);
      cylinders.push(cylinder);
    };

    const rotations = [
      { x: .75, y: 0, z: 0 },
      { x: .74, y: 0, z: -.05 },
      { x: .72, y: 0, z: -.07 },
      { x: -1, y: 0, z: 2 },
      { x: .8, y: 0, z: .5 },
      { x: 1.05, y: 0, z: 0 },
      { x: 2, y: 0, z: 3 },
      { x: .8, y: 0, z: 2.5 },
    ];

    rotations.forEach(rot => createCylinder(rot));

    // Detect click-drag rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
    };

    const onMouseMove = (e) => {
      const deltaMove = { x: e.offsetX - previousMousePosition.x };

      if (isDragging) {
        sphere.rotation.y += deltaMove.x * .004;
      }

      previousMousePosition = { x: e.offsetX, y: e.offsetY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener('mousedown', onMouseDown);
    currentMount.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    currentMount.addEventListener('mouseout', onMouseUp);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (!isDragging) {
        sphere.rotation.y += 0.0005;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Generate new curve every 5 seconds
    const intervalId = setInterval(createRandomCurve, 5000);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousedown', onMouseDown);
      currentMount.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      currentMount.removeEventListener('mouseout', onMouseUp);
      clearInterval(intervalId);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', width: '100%', height: '100%' }} />;
};

export default GlobeAnimation;
