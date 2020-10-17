import React from 'react';
import PropTypes from 'prop-types';
import { TextStyle } from './styles';

const Text = ({ text }) => {
  return <TextStyle>{text}</TextStyle>;
};

Text.propTypes = {
  text: PropTypes.string,
};

export default Text;
