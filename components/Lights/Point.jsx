import PropTypes from 'prop-types';
import React from 'react';

import Plane from '../Shapes/Plane';

const Point = ({
  onClick,
  castShadow,
  debug,
  color,
  position,
  intensity,
  rotation,
  visible,
  shadowMapDimensions,
}) => {
  return (
    <>
      {debug ? (
        <Plane onClick={onClick} position={position} rotation={rotation} />
      ) : null}
      <pointLight
        visible={visible}
        shadow-mapSize-width={shadowMapDimensions}
        shadow-mapSize-height={shadowMapDimensions}
        color={color}
        castShadow={castShadow}
        rotation={rotation}
        intensity={intensity}
        position={position}
      />
    </>
  );
};

Point.propTypes = {
  onClick: PropTypes.func,
  castShadow: PropTypes.bool,
  debug: PropTypes.bool,
  color: PropTypes.string,
  position: PropTypes.array.isRequired,
  intensity: PropTypes.number,
  rotation: PropTypes.array.isRequired,
  visible: PropTypes.bool,
  shadowMapDimensions: PropTypes.number,
};

Point.defaultProps = {
  onClick: () => {},
  castShadow: false,
  debug: false,
  color: 'white',
  intensity: 1,
  visible: false,
  shadowMapDimensions: 1024,
};

export default Point;
