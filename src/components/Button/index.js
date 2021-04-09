import React from 'react';

import { Container } from './styles';

const Button = ({ outlined, size, children, ...rest }) => (
  <Container outlined={outlined} size={size} type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
