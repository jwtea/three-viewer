import React from 'react';
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';
import * as THREE from 'three';
import Controls from './Controls';

import Triangles from './Shapes/Triangles';
import Points from './Shapes/Points';
import Polyhedron from './Shapes/Basic/Polyhedron';
import PointLight from './Lights/Point';

const ViewerContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

const cameraOpts = {
  fov: 45,
  near: 0.0001,
  far: 100000,
  position: [200, 200, 0],
};

// fov?: number, aspect?: number, near?: number, far?: number

const onCanvasCreated = ({ gl }) => {
  /* eslint no-param-reassign: "error" */
  gl.shadowMap.enabled = true;
  gl.shadowMap.type = THREE.PCFShadowMap;
  gl.gammaOutput = true;
  gl.gammaFactor = 2.2;
  gl.toneMappingExposure = 1.0;
  /* eslint-env browser */
  gl.setPixelRatio(window.devicePixelRatio);
};

const Background = () => {
  return (
    <ViewerContainer>
      <CanvasContainer>
        <Canvas
          camera={cameraOpts}
          pixelRatio={window.devicePixelRatio}
          onCreated={onCanvasCreated}
        >
          <ambientLight />
          <PointLight
            visible
            intensity={1}
            debug
            color="white"
            position={[0, 200, 0]}
            rotation={[Math.PI / -2.5, 0, 0]}
          />
          <Controls />
          <Triangles />
        </Canvas>
      </CanvasContainer>
    </ViewerContainer>
  );
};

export default Background;
