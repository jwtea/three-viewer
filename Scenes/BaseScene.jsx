import React from 'react';
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';
import * as THREE from 'three';

import Controls from '../components/Controls';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;

const cameraOpts = {
  fov: 45,
  near: 0.001,
  far: 100000,
  // position: [0, 0, 4],
  position: [-1, 1, 1],
};

const onCanvasCreated = ({ gl }) => {
  /* eslint no-param-reassign: "error" */
  gl.shadowMap.enabled = true;
  gl.shadowMap.type = THREE.PCFShadowMap;
  gl.gammaOutput = true;
  gl.gammaFactor = 2.2;
  gl.toneMappingExposure = 1.0;
  /* eslint-env browser */
  gl.setPixelRatio(window.devicePixelRatio);
  gl.autoClear = true;
  gl.antialiasing = true;
};

export default ({ children }) => (
  <CanvasContainer>
    <Canvas
      camera={cameraOpts}
      pixelRatio={window.devicePixelRatio}
      onCreated={onCanvasCreated}
    >
      <Controls />
      {children}
    </Canvas>
  </CanvasContainer>
);
