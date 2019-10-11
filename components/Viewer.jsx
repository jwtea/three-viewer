import React from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import * as THREE from 'three';
import Sobel from '../components/Effects/Sobel';

import PlateScene from '../Scenes/PlateScene';
import Controls from './Controls';
import StudioLighting from './Lights/StudioLighting';

const cameraOpts = {
  fov: 45,
  near: 0.001,
  far: 100000,
  position: [10, 10, 10],
};

const onCanvasCreated = ({ gl }) => {
  /* eslint no-param-reassign: "error" */
  gl.shadowMap.enabled = true;
  gl.shadowMap.type = THREE.PCFShadowMap;
  gl.gammaOutput = true;
  gl.toneMappingExposure = 1.0;
  /* eslint-env browser */
  gl.setPixelRatio(window.devicePixelRatio);
};

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Viewer = () => {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <CanvasContainer>
          <Canvas camera={cameraOpts} onCreated={onCanvasCreated}>
            <Provider store={store}>
              <Controls />
              <StudioLighting />
              <PlateScene />
              <Sobel />
            </Provider>
          </Canvas>
        </CanvasContainer>
      )}
    </ReactReduxContext.Consumer>
  );
};

export default Viewer;
