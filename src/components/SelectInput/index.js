import PropTypes from 'prop-types';
import React from 'react';
import StyledSelectInput, {
  StyledSelectInputContainer,
  StyledCaret,
} from './selectInput.style';

const SelectInput = (props) => {
  const { onChange, value, ...rest } = props;

  return (
    <StyledSelectInputContainer>
      <StyledSelectInput value={value} onChange={onChange} {...rest} />
      <StyledCaret />
    </StyledSelectInputContainer>
  );
};

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectInput;
