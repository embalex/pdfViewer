import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Button } from './Zoom.styled';

const propTypes = {
  onZoomIn: PropTypes.func.isRequired,
  onZoomOut: PropTypes.func.isRequired,
};

const Zoom = ({
  onZoomIn,
  onZoomOut,
}) => (
  <Wrapper>
    <Button onClick={onZoomIn}>
      <div>+</div>
    </Button>
    <Button onClick={onZoomOut}>
      <div>-</div>
    </Button>
  </Wrapper>
);

Zoom.propTypes = propTypes;

export default Zoom;
