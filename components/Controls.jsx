import React, { useRef } from 'react';
import { extend, useRender, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import PropTypes from 'prop-types';

extend({ OrbitControls });

const Controls = ({ target, enableZoom }) => {
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
      autoRotate={false}
      enableZoom={enableZoom}
      // maxZoom={0}
      // maxDistance={3.6}
      enablePan
      // maxPolarAngle={Math.PI / 2}
      // minPolarAngle={0}
      target={target}
      enableDamping
      args={[camera, gl.domElement]}
    />
  );
};

Controls.defaultProps = {
  target: [0, 0.7, 0],
  enableZoom: true,
};

Controls.propTypes = {
  target: PropTypes.array,
  enableZoom: PropTypes.bool,
};

export default Controls;
