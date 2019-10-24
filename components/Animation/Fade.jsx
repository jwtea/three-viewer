import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FadeDiv = styled.div`
  opacity: ${props => (props.visible ? 0 : 1)};

  transition: opacity 1s linear;
`;

const Fade = ({ visible, className }) => (
  <FadeDiv className={className} visible={visible} />
);

Fade.propTypes = {
  visible: PropTypes.bool,
  className: PropTypes.string,
};

Fade.defaultProps = {
  visible: false,
  className: '',
};

export default Fade;
