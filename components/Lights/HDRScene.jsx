import PropTypes from 'prop-types';
import React, { cloneElement, Suspense } from 'react';
import { useLoader, useThree } from 'react-three-fiber';
import * as THREE from 'three';
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader';
import { PMREMCubeUVPacker } from 'three/examples/jsm/pmrem/PMREMCubeUVPacker';
import { PMREMGenerator } from 'three/examples/jsm/pmrem/PMREMGenerator';
import { useSelector } from 'react-redux';

import Polyhedron from '../Shapes/Polyhedron';

const HDRScene = ({ HDRPath, imagePaths, children }) => {
  const { scene, gl } = useThree();
  const background = useSelector(state => state.background);
  const [cubeMapText] = useLoader(
    HDRCubeTextureLoader,
    [imagePaths],
    loader => {
      loader.setPath(HDRPath).setDataType(THREE.UnsignedByteType);
    }
  );
  const pmremGenerator = new PMREMGenerator(cubeMapText);
  pmremGenerator.update(gl);

  const pmremCubeUVPacker = new PMREMCubeUVPacker(pmremGenerator.cubeLods);
  pmremCubeUVPacker.update(gl);

  const hdrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget;

  cubeMapText.magFilter = THREE.LinearFilter;
  cubeMapText.needsUpdate = true;

  pmremGenerator.dispose();
  pmremCubeUVPacker.dispose();

  scene.background = background ? cubeMapText : null;

  return (
    <>
      {cloneElement(children, {
        HDRTexture: hdrCubeRenderTarget.texture,
      })}
    </>
  );
};

const HDRSceneSuspense = ({ children, HDRPath, imagePaths }) => {
  return (
    <Suspense fallback={<Polyhedron position={[0, 0, 0]} />}>
      <HDRScene HDRPath={HDRPath} imagePaths={imagePaths}>
        {children}
      </HDRScene>
    </Suspense>
  );
};

const propTypes = {
  HDRPath: PropTypes.string.isRequired,
  imagePaths: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

HDRScene.propTypes = propTypes;
HDRSceneSuspense.propTypes = propTypes;

export default HDRSceneSuspense;
