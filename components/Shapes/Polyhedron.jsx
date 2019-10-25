import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

const defaults = require('./defaults.json');

const { vertices, indices } = defaults.poly;

const radius = 0.1;
const detail = 2;

const Polyhedron = ({ position, rotation, color }) => {
  const meshRef = useRef();
  const dispatch = useDispatch();
  return (
    <mesh
      ref={meshRef}
      onPointerOver={() =>
        dispatch({ type: 'HOVERED_MESH', mesh: meshRef.current })
      }
      onPointerOut={() => dispatch({ type: 'HOVERED_MESH_LEFT' })}
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
  position: PropTypes.array.isRequired,
  rotation: PropTypes.array,
  color: PropTypes.string,
};

Polyhedron.defaultProps = {
  rotation: [0, 0, 0],
  color: 'blue',
};

export default Polyhedron;
