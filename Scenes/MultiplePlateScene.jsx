/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLoader } from 'react-three-fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import HDR from '../components/Lights/HDRScene';
import Object from '../components/Objects/Object';
import { mapEnv } from '../Helpers/Loading';

const MultiplePlateScene = ({ HDRTexture }) => {
  const gltf = useLoader(GLTFLoader, '/PlateTest.glb', loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  /* eslint no-underscore-dangle: ["error", { "allow": ["__$"] }] */
  mapEnv(gltf, HDRTexture);

  gltf.__$[2].material.envMap = null;
  gltf.__$[2].material.needsUpdate = false;
  gltf.__$[2].material.alphaTest = 0.001;

  const dispatch = useDispatch();
  dispatch({ type: 'LOADED', objects: ['PRODUCT_1', 'PRODUCT_2'] });

  return (
    <>
      <Object objKey="PRODUCT_1" meshes={[gltf.__$[1], gltf.__$[2]]} />
      <Object objKey="PRODUCT_2" meshes={[gltf.__$[1], gltf.__$[2]]} />
    </>
  );
};

// TODO look at a better way to approach HDR loading for components.
MultiplePlateScene.propTypes = {
  HDRTexture: PropTypes.object.isRequired,
};

const imagePaths = ['px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr'];
const HDRPath = '/textures/hdr/studio/';

export default () => (
  <HDR HDRPath={HDRPath} imagePaths={imagePaths} enableBackground={false}>
    <MultiplePlateScene />
  </HDR>
);
