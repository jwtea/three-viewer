import PropTypes from 'prop-types';
import React from 'react';

const defaults = require('../defaults.json');

const { vertices, indices } = defaults.poly;

const radius = 0.1;
const detail = 2;

const Polyhedron = ({ position, rotation, color }) => {

  return (
    <mesh
      position={position}
      rotation={rotation}
    >
      <polyhedronBufferGeometry
        attach="geometry"
        args={[vertices, indices, radius, detail]}
      />

      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};

Polyhedron.propTypes = {
  position: PropTypes.array,
  rotation: PropTypes.array,
  color: PropTypes.string,
};

Polyhedron.defaultProps = {
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  color: 'blue',
};

export default Polyhedron;
