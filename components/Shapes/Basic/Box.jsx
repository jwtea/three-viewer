import PropTypes from 'prop-types';
import React from 'react';

const Box = ({ position, rotation, color }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhongMaterial attach="material" color={color} />
    </mesh>
  );
};

Box.propTypes = {
  position: PropTypes.array,
  rotation: PropTypes.array,
  color: PropTypes.string,
};

Box.defaultProps = {
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  color: 'blue',
};

export default Box;
