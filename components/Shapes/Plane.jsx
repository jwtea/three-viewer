import React from 'react';
import PropTypes from 'prop-types';

const Plane = ({ position, onClick, rotation }) => {
  return (
    <mesh onClick={onClick} position={position} rotation={rotation}>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshBasicMaterial
        attach="material"
        color="black"
        opacity={0.5}
        transparent
      />
    </mesh>
  );
};

Plane.propTypes = {
  position: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  rotation: PropTypes.array,
};

Plane.defaultProps = {
  onClick: () => {},
  rotation: [0, 0, 0],
};

export default Plane;
