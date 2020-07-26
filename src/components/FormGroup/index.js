import PropTypes from 'prop-types';
import React from 'react';
import StyledFormGroup from './style';

const FormGroup = (props) => {
  const { index, children, ...rest } = props;

  return (
    <StyledFormGroup index={index} {...rest}>
      {children}
    </StyledFormGroup>
  );
};

FormGroup.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
};

export default FormGroup;
