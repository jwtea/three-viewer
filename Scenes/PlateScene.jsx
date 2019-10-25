/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import HDR from '../components/Lights/HDRScene';

const PlateScene = ({ HDRTexture }) => {
  const lights = useSelector(state => state.lights);
  const plate = useRef();
  const gltf = useLoader(GLTFLoader, '/PlateTest.glb', loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/gltf/');
    loader.setDRACOLoader(dracoLoader);
  });

  /* eslint no-underscore-dangle: ["error", { "allow": ["__$"] }] */
  gltf.__$.map(obj => {
    if (obj.material) {
      /* eslint no-param-reassign: "error" */
      obj.material.envMap = HDRTexture;
      obj.material.needsUpdate = true;
      if (obj.material.aoMap) {
        obj.material.aoMap.flipY = true;
        obj.material.aoMap.wrapS = THREE.RepeatWrapping;
        obj.material.aoMap.wrapT = THREE.RepeatWrapping;
      }
    }
    return obj;
  });

  gltf.__$[2].material.envMap = null;
  gltf.__$[2].material.needsUpdate = false;
  gltf.__$[2].material.alphaTest = 0.01;

  const dispatch = useDispatch();
  dispatch({ type: 'LOADED' });

  return (
    <group>
      <mesh
        ref={plate}
        onPointerOver={() =>
          dispatch({ type: 'HOVERED_MESH', mesh: plate.current })
        }
        onPointerOut={() => dispatch({ type: 'HOVERED_MESH_LEFT' })}
        receiveShadow={lights}
        castShadow={lights}
        name="Disc"
      >
        <bufferGeometry attach="geometry" {...gltf.__$[1].geometry} />
        <meshStandardMaterial
          attach="material"
          {...gltf.__$[1].material}
          name="Mat"
        />
      </mesh>
      <mesh receiveShadow={lights} castShadow={lights} name="MSBR_11">
        <bufferGeometry attach="geometry" {...gltf.__$[2].geometry} />
        <meshStandardMaterial
          attach="material"
          {...gltf.__$[2].material}
          name="Mat.1"
        />
      </mesh>
    </group>
  );
};

// TODO look at a better way to approach HDR loading for components.
PlateScene.propTypes = {
  HDRTexture: PropTypes.object.isRequired,
};

const imagePaths = ['px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr'];
const HDRPath = '/textures/hdr/studio/';

export default () => (
  <HDR HDRPath={HDRPath} imagePaths={imagePaths} enableBackground={false}>
    <PlateScene />
  </HDR>
);
