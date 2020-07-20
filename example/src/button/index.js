import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  ${(props) => `
  background-color: ${props.theme.color.primary.main};
  border-radius: ${props.theme.button.borderRadius};
  border: ${props.theme.button[props.size].borderWidth} solid
    ${props.theme.color.primary.dark};
  color: ${props.theme.color.primary.contrastText};
  font-size: ${props.theme.button[props.size].fontSize};
  padding: ${props.theme.button[props.size].padding};
`}
`;

const Button = (props) => {
  const { size, children } = props;
  return <StyledButton size={size}>{children}</StyledButton>;
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  children: PropTypes.node,
};

Button.defaultProps = {
  size: 'small',
  children: null,
};

export default Button;
