import styled from 'styled-components';

const StyledTextInput = styled.input`
  background: none;
  border: 1.5px solid transparent;
  border-bottom-color: grey;
  min-width: 200px;
  outline: none;
  padding: 0.5rem 1rem 0.4rem;
  text-align: center;
  :focus {
    border: 1.5px solid black;
    background: white;
    border-radius: 5px;
  }
`;

export default StyledTextInput;
