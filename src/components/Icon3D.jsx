import React, { useRef, useEffect } from 'react';
import { useThree, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Icon3D = () => {
  const { camera, gl } = useThree();
  const iconRef = useRef();

  // Charger le modèle GLTF
  const gltf = useLoader(GLTFLoader, '/baker_and_the_bridge.glb');

  // Créer OrbitControls et attacher à la caméra
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableDamping = true; // Ajouter un effet de suivi doux
    controls.target = iconRef.current.position; // Définir la cible de la caméra sur l'icône
    controls.update();



    // Ajuster la position de la caméra
    camera.position.z = 20; // Ajuster la distance entre la caméra et le modèle
    camera.position.y = 5; // Ajuster la hauteur de la caméra

    // Nettoyer lors du démontage du composant
    return () => {
      controls.dispose();
    };
  }, [camera, gl.domElement]);

  return (
    <mesh ref={iconRef}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Icon3D;
