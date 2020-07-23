import PropTypes from 'prop-types';
import React from 'react';
import StyledSelectInput from './selectInput.style';

const SelectInput = (props) => {
  const { onChange, value, ...rest } = props;

  return <StyledSelectInput value={value} onChange={onChange} {...rest} />;
};

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectInput;
