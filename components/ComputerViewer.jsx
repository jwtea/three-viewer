import React from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import { Provider, ReactReduxContext } from 'react-redux';

import ComputerScene from '../Scenes/ComputersScene';
import Controls from './ExtendedControls';
import BadTV from './Effects/BadTV';
import PointLight from './Lights/Point';

const cameraOpts = {
  fov: 45,
  near: 0.001,
  far: 100000,
  position: [0, 150, 200],
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
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Canvas
          camera={cameraOpts}
          pixelRatio={window.devicePixelRatio}
          onCreated={onCanvasCreated}
        >
          <Provider store={store}>
            <Controls pPos={[0, 100, 150]} pTar={[0, 100, 0]} />
            <BadTV />
            <PointLight
              visible
              intensity={1}
              position={[
                3.4312996864318848,
                2.002431631088257,
                5.763840675354004,
              ]}
              rotation={[
                -0.4173854870126512,
                0.5551711881098526,
                0.2645436633227689,
              ]}
            />
            <ComputerScene />
          </Provider>
        </Canvas>
      )}
    </ReactReduxContext.Consumer>
  );
};

export default Viewer;
