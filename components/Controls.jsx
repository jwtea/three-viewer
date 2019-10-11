import React, { useRef } from 'react';
import { extend, useRender, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = () => {
  const { camera, gl } = useThree();
  const ref = useRef();

  useRender(() => {
    /* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
    ref.current && ref.current.update();
    camera.updateMatrixWorld();
  });

  return (
    <orbitControls
      ref={ref}
      autoRotate
      enableZoom={false}
      maxZoom={0}
      maxDistance={3.6}
      enablePan={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={0}
      target={[0, 0.7, 0]}
      enableDamping
      args={[camera, gl.domElement]}
    />
  );
};

export default Controls;
