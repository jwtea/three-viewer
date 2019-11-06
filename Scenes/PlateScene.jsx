/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLoader } from 'react-three-fiber';
import { a } from '@react-spring/three';
import { useSpring, config } from '@react-spring/core';
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

  const [hovered, setHovered] = useState(false);

  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: config.stiff,
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
  gltf.__$[2].material.alphaTest = 0.001;

  const dispatch = useDispatch();
  dispatch({ type: 'LOADED', objects: [] });

  return (
    <group>
      <a.mesh
        scale={scale.interpolate(s => [s, s, s])}
        ref={plate}
        onPointerOver={() => {
          setHovered(true);
          dispatch({ type: 'HOVERED_MESH', mesh: plate.current });
        }}
        onPointerOut={() => {
          setHovered(false);
          dispatch({ type: 'HOVERED_MESH_LEFT' });
        }}
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
      </a.mesh>
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
