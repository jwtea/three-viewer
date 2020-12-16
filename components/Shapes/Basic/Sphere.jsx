import PropTypes from 'prop-types';
import React from 'react';

const Sphere = ({ position, rotation, color, layers, args }) => {
  return (
    <mesh layers={layers} position={position} rotation={rotation}>
      <sphereBufferGeometry attach="geometry" args={args} />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};

Sphere.propTypes = {
  position: PropTypes.array,
  rotation: PropTypes.array,
  color: PropTypes.string,
  args: PropTypes.array,
};

Sphere.defaultProps = {
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  args: [1, 16, 16],
  color: 'blue',
};

export default Sphere;
