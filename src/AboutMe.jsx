import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import cloudTexture from "./assets/cloud.png"; // Ensure this path is correct
import earthTexture from "./assets/land.png"; 
import DNAHelix from './threejs/DNA';




function AboutMe() {
  return (
    <div>
      <DNAHelix/>
      {/* Additional content about yourself here */}
    </div>
  );
}

export default AboutMe;
// function Globe() {
//   const mountRef = useRef(null);
//   const cloudsMeshRef = useRef();
//   const sphereRef = useRef(null); // useRef for the sphere

//   useEffect(() => {
//     const currentRef = mountRef.current;
//     const { clientWidth: width, clientHeight: height } = currentRef;
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     const loader = new THREE.TextureLoader();

//     renderer.setSize(width, height);
//     currentRef.appendChild(renderer.domElement);

//     loader.load(earthTexture, (texture) => {
//       const sphereMaterial = new THREE.MeshPhongMaterial({
//         map: texture,
//         color: new THREE.Color(0xFFFFFF), // Pink color
//         // Optional: Add these properties if the texture map is making the sphere appear black
//         reflectivity: 0,
//         shininess: 0
//       });
//       const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
//       sphereRef.current = new THREE.Mesh(sphereGeometry, sphereMaterial);
//       scene.add(sphereRef.current);
//     });

//     let cloudMaterial;

//     loader.load(cloudTexture, (texture) => {
//       const cloudGeometry = new THREE.SphereGeometry(5.05, 32, 32);
//       cloudMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.2 });
//       cloudsMeshRef.current = new THREE.Mesh(cloudGeometry, cloudMaterial);
//       scene.add(cloudsMeshRef.current);
//     });

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);
//     camera.position.z = 10;

//     const animate = function () {
//       requestAnimationFrame(animate);

//       if (cloudsMeshRef.current) {
//         cloudsMeshRef.current.rotation.y += 0.003;
//         cloudsMeshRef.current.rotation.x += 0.002;
//         const scale = 1 + 0.1 * Math.abs(Math.sin(performance.now() / 1000));
//         cloudsMeshRef.current.scale.set(scale, scale, scale);
//         cloudMaterial.opacity = Math.max(0.6, 0.8 + 0.2 * Math.sin(performance.now() / 1000));
//       }

//       // if (sphereRef.current) {
//       //   sphereRef.current.rotation.y -= 0.005;
//       // }

//       renderer.render(scene, camera);
//     };

//     animate();

//     return () => {
//       currentRef.removeChild(renderer.domElement);
//     };
//   }, []);

//   return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
// }
