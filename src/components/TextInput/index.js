import PropTypes from 'prop-types';
import React from 'react';
import StyledTextInput from './textInput.style';

const TextInput = (props) => {
  const { id, onChange, value, ...rest } = props;

  return (
    <StyledTextInput
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
