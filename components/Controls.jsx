import React, { useRef } from 'react';
import { extend, useRender, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import PropTypes from 'prop-types';

extend({ OrbitControls });

const Controls = ({
  target,
  enableZoom,
  autoRotate,
  minDistance,
  maxDistance,
  maxPolarAngle,
  minPolarAngle,
}) => {
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
      autoRotate={autoRotate}
      enableZoom={enableZoom}
      // maxZoom={0}
      minDistance={minDistance}
      maxDistance={maxDistance}
      enablePan
      maxPolarAngle={maxPolarAngle}
      minPolarAngle={minPolarAngle}
      target={target}
      enableDamping
      args={[camera, gl.domElement]}
    />
  );
};

Controls.defaultProps = {
  target: [0, 0.7, 0],
  minDistance: 200,
  maxDistance: null,
  enableZoom: true,
  autoRotate: false,
  maxPolarAngle: Math.PI / 2,
  minPolarAngle: 0,
};

Controls.propTypes = {
  target: PropTypes.array,
  enableZoom: PropTypes.bool,
  autoRotate: PropTypes.bool,
  minDistance: PropTypes.number,
  maxDistance: PropTypes.number,
  maxPolarAngle: PropTypes.number,
  minPolarAngle: PropTypes.number,
};

export default Controls;
