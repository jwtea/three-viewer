import PropTypes from 'prop-types';
import React, { Suspense } from 'react';
import { useLoader } from 'react-three-fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import Plane from '../Shapes/Plane';

const Model = ({ url }) => {
  const [gltf] = useLoader(GLTFLoader, url, loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  return <primitive object={gltf.scene} />;
};

const GLTFSuspense = ({ url }) => {
  return (
    <Suspense fallback={<Plane />}>
      <Model url={url} />
    </Suspense>
  );
};

const propTypes = {
  url: PropTypes.string.isRequired,
};

Model.propTypes = propTypes;
GLTFSuspense.propTypes = propTypes;

export default GLTFSuspense;
