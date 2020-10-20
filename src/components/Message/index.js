import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Shared/Button';
import Text from '../Shared/Text';
import { Container } from './styles';

const Message = ({ text, action, actionLabel }) => {
  return (
    <Container>
      <Text text={text} />
      <Button onClick={action} label={actionLabel} />
    </Container>
  );
};

Message.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string,
  actionLabel: PropTypes.string,
};

export default Message;
