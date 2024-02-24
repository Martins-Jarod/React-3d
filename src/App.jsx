import React from 'react';
import { Canvas } from '@react-three/fiber';
import Icon3D from './components/Icon3D.jsx';
import CustomText from './components/CustomText.jsx'; // Importer le composant ProfileCard
import './App.css'; // Importer votre fichier CSS pour les styles personnalisés

function App() {
  return (
    <div className="app-container">
      <div className="canvas-container"> {/* Conteneur pour la scène 3D */}
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Icon3D />
          <CustomText /> {/* Rendre la ProfileCard à l'intérieur du Canvas */}
        </Canvas>
      </div>
    </div>
  );
}

export default App;
