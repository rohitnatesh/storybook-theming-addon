import PropTypes from 'prop-types';
import React from 'react';
import StyledButton from './style';

const Button = (props) => {
  const { children, type, negative, ...rest } = props;
  return (
    <StyledButton type={type} negative={negative} {...rest}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
  negative: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  negative: false,
  type: 'button',
};

export default Button;
