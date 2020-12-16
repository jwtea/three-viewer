import React, { useRef, useEffect, useState } from 'react';
import { useSpring, config } from '@react-spring/three';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import PointLight from '../Lights/Point';
import DissolveMaterial from '../Materials/Dissolve';

export default function ScrewModel({ HDRTexture }) {
  const group = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, '/CreedScrew.glb');

  const { threshold } = useSpring({
    from: { threshold: 1 },
    threshold: 0,

    config: {
      ...config.stiff,
      duration: 5000,
    },
  });

  Object.entries(materials).map(([k, material]) => {
    /* eslint no-param-reassign: "error" */
    material.envMap = HDRTexture;
    material.needsUpdate = true;
    if (material.aoMap) {
      material.aoMap.flipY = true;
      material.aoMap.wrapS = THREE.RepeatWrapping;
      material.aoMap.wrapT = THREE.RepeatWrapping;
    }
    return material;
  });

  return (
    <group ref={group} dispose={null}>
      <scene>
        <PointLight
          name="Right"
          // castShadow
          visible
          intensity={3}
          position={[6.038975715637207, 9.107156753540039, -4.790119647979736]}
          rotation={[
            -2.3121261995410682,
            0.6776334492504132,
            2.541144467709226,
          ]}
        />
        <PointLight
          visible
          // castShadow
          name="Left"
          intensity={2.5}
          rotation={[0, 0, 0]}
          position={[0, 3.0179929733276367, 9.15882396697998]}
        />
        <mesh
          rotation={[0, 0, 0]}
          // material={nodes['P001-0332-00-18_AF0_body1'].material}
          geometry={nodes['P001-0332-00-18_AF0_body1'].geometry}
          name="P001-0332-00-18_AF0_body1"
        >
          <DissolveMaterial threshold={threshold} />
        </mesh>
        <mesh
          rotation={[0, 0, 0]}
          // material={nodes['P001-0332-00-18_AF0_body1'].material}
          geometry={nodes['P001-0332-00-18_AF0_body1'].geometry}
          name="wow"
        >
          <meshStandardMaterial
            attach="material"
            roughness={0}
            metalness={0.4}
            // transparent
            reflectivity={1.0}
            opacity={0.3}
            color="blue"
            stencilRef
          />
        </mesh>
        {/* <mesh
          rotation={[0, 0, 0]}
          // material={nodes['P001-0333-00-18_AF0'].material}
          geometry={nodes['P001-0333-00-18_AF0'].geometry}
          name="P001-0333-00-18_AF0"
        >
          <DissolveMaterial threshold={threshold} />
        </mesh> */}
      </scene>
    </group>
  );
}
