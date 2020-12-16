import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

import Controls from '../components/Controls';
import VolumetricLights from '../components/Effects/VolumetricLights';
import { OCCLUSION_LAYER } from '../components/layers';
import Box from '../components/Shapes/Basic/Box';
import Sphere from '../components/Shapes/Basic/Sphere';
import BaseScene from './BaseScene';

const Boxes = ({ position }) => {
  const group = useRef();

  useFrame(() => {
    group.current.rotation.x += 0.004;
  });

  return (
    <group position={position} ref={group}>
      <Box />

      <mesh layers={OCCLUSION_LAYER}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshPhongMaterial attach="material" color={0x000000} />
      </mesh>
    </group>
  );
};

const Viewer = () => {
  return (
    <BaseScene>
      <Controls target={[0, 0, 0]} />

      <ambientLight args={[0x2c3e50]} />

      <pointLight intensity={10} />
      <Sphere color="white" layers={OCCLUSION_LAYER} />
      <Boxes position={[3, 0, 0]} />
      <Boxes position={[5, 1, 1]} />

      <VolumetricLights />
    </BaseScene>
  );
};

export default Viewer;
