import React from 'react';
import { a } from '@react-spring/three';

export default ({ mesh, opacity }) => (
  <mesh position={mesh.position} rotation={mesh.rotation} name={mesh.name}>
    <bufferGeometry attach="geometry" {...mesh.geometry} />
    <a.meshStandardMaterial
      attach="material"
      {...mesh.material}
      transparent
      opacity={opacity}
    />
  </mesh>
);
