import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Button } from './Pagination.styled';

const propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

const Pagination = ({
  onIncrement,
  onDecrement,
}) => (
  <Wrapper>
    <Button onClick={onDecrement}>
      <div>{'<'}</div>
    </Button>
    <Button onClick={onIncrement}>
      <div>{'>'}</div>
    </Button>
  </Wrapper>
);

Pagination.propTypes = propTypes;

export default Pagination;
