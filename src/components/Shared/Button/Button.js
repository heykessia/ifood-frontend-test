import React from 'react';
import PropTypes from 'prop-types';
import { PrymaryButton } from './styles';

const Button = ({ onClick, label }) => {
  return <PrymaryButton onClick={onClick}>{label}</PrymaryButton>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;
