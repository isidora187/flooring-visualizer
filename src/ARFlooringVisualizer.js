import { useEffect, useRef, useState } from "react";
import { ARButton } from "three/examples/jsm/webxr/ARButton";
import * as THREE from "three";

export default function ARFlooringVisualizer() {
  const containerRef = useRef(null);
  const [scene, setScene] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    // Add AR Button
    document.body.appendChild(ARButton.createButton(renderer));

    // Lighting
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    // Floor Texture
    const textureLoader = new THREE.TextureLoader();
    const floorTexture = textureLoader.load("/flooring_texture.png"); // Change to actual texture
    const floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture });
    const floorGeometry = new THREE.PlaneGeometry(2, 2);
    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
    floorMesh.rotation.x = -Math.PI / 2;
    scene.add(floorMesh);

    // Render Loop
    const animate = () => {
      renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
      });
    };
    animate();

    setScene(scene);
  }, []);

  return <div ref={containerRef} className="w-full h-screen" />;
}
