import React from 'react';
import { Provider, ReactReduxContext, useSelector } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';
import * as THREE from 'three';

import PlateScene from '../Scenes/PlateScene';
import Fade from './Animation/Fade';
import Controls from './Controls';
import Outline from './Effects/Outline';
import Sobel from './Effects/Sobel';
import StudioLighting from './Lights/StudioLighting';

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

const LoadingOverlay = styled(Fade)`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  z-index: 1;
  background: white;
`;

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

const Viewer = () => {
  const loaded = useSelector(state => state.loaded);
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <ViewerContainer>
          <LoadingOverlay visible={loaded} />
          <CanvasContainer>
            <Canvas
              camera={cameraOpts}
              pixelRatio={window.devicePixelRatio}
              onCreated={onCanvasCreated}
            >
              <Provider store={store}>
                <Controls />
                <StudioLighting />
                <PlateScene />
                <Outline />
                <Sobel />
              </Provider>
            </Canvas>
          </CanvasContainer>
        </ViewerContainer>
      )}
    </ReactReduxContext.Consumer>
  );
};

export default Viewer;
