/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoader } from 'react-three-fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import HDR from '../components/Lights/HDRScene';
import Object from '../components/Objects/Object';
import { mapEnv, mapProducts } from '../Helpers/Loading';

/**
 * This component will try and load a scene file for the carousel.
 * The scene heirachy must be base nodes with the name PRODUCT_* then any meshes
 * underneath this parent node
 * for example
 * PRODUCT_1: [
 *    Spheremesh,
 *    CircleMesh
 * ],
 * PRODUCT_2: [
 *    Teapot
 *    Object1
 * ]
 *
 * @param {*} param0
 */
const DynamicObjectScene = ({ HDRTexture, glbURI }) => {
  const gltf = useLoader(GLTFLoader, glbURI, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  /* eslint no-underscore-dangle: ["error", { "allow": ["__$"] }] */
  mapEnv(gltf, HDRTexture);
  const products = mapProducts(gltf);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'LOADED', objects: products.map(product => product.key) });
  }, [glbURI]);
  return (
    <scene>
      {products.map(product => (
        <Object
          key={product.key}
          objKey={product.key}
          meshes={product.objects}
        />
      ))}
    </scene>
  );
};

// TODO look at a better way to approach HDR loading for components.
DynamicObjectScene.propTypes = {
  HDRTexture: PropTypes.object,
};

DynamicObjectScene.defaultProps = {
  HDRTexture: null,
};

const imagePaths = ['px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr'];
const HDRPath = '/textures/hdr/studio/';

export default ({ glbURI }) => (
  <HDR HDRPath={HDRPath} imagePaths={imagePaths} enableBackground={false}>
    <DynamicObjectScene glbURI={glbURI} />
  </HDR>
);
