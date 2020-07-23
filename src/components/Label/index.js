import PropTypes from 'prop-types';
import React from 'react';
import StyledLabel from './label.style';

const Label = (props) => {
  const { htmlFor, isRoot, children, ...rest } = props;

  return (
    <StyledLabel htmlFor={htmlFor} isRoot={isRoot} {...rest}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  isRoot: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Label.defaultProps = {
  htmlFor: null,
  isRoot: false,
};

export default Label;
