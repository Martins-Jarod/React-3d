// CustomText.jsx
import React from 'react';
import { Text } from '@react-three/drei';

const CustomText = () => {
  return (
    <Text
      fontSize={1} // Taille de la police
      position={[0, 2, 0]} // Position du texte dans la scène (x, y, z)
      color="white" // Couleur du texte
      anchorX="center" // Position horizontale du texte
      anchorY="middle" // Position verticale du texte
    >
      Hello World!
    </Text>
  );
};

export default CustomText;
