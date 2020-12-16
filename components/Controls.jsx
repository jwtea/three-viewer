import React, { useRef } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import PropTypes from 'prop-types';

extend({ OrbitControls });

const Controls = ({ target, enableZoom, autoRotate }) => {
  const { camera, gl } = useThree();
  const ref = useRef();

  useFrame(() => {
    /* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
    ref.current && ref.current.update();
    camera.updateMatrixWorld();
  });

  return (
    <orbitControls
      ref={ref}
      autoRotate={autoRotate}
      autoRotateSpeed={10}
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
  target: [2, -1, 0],
  enableZoom: true,
  autoRotate: false,
};

Controls.propTypes = {
  target: PropTypes.array,
  enableZoom: PropTypes.bool,
  autoRotate: PropTypes.bool,
};

export default Controls;
