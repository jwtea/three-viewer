import React from 'react';
import { Provider, ReactReduxContext, useSelector } from 'react-redux';
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';
import * as THREE from 'three';

import DynamicObjectScene from '../Scenes/DynamicObjectScene';
import Fade from './Animation/Fade';
import ExtendedControls from './ExtendedControls';
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

const StyledLoadingOverlay = styled(Fade)`
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
  position: [0, 3.6, 3.6],
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
};

const LoadingOverlay = () => {
  const loaded = useSelector(state => state.loaded);
  return <StyledLoadingOverlay visible={loaded} />;
};

const Viewer = () => {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <ViewerContainer>
          <LoadingOverlay />
          <CanvasContainer>
            <Canvas
              className="wo"
              camera={cameraOpts}
              pixelRatio={window.devicePixelRatio}
              onCreated={onCanvasCreated}
            >
              <Provider store={store}>
                <ExtendedControls />
                <StudioLighting />
                <DynamicObjectScene glbURI="/MiniFrag.glb" />
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
