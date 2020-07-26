import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => (props.negative ? '#ffffff' : '#51c256')};
  border: 2px solid ${(props) => (props.negative ? '#d1343c' : '#51c256')};
  border-radius: 3px;
  color: ${(props) => (props.negative ? '#d1343c' : '#ffffff')};
  cursor: pointer;
  font-weight: ${(props) => (props.negative ? 'normal' : 'bold')};
  letter-spacing: ${(props) => (props.negative ? '0' : '1px')};
  padding: ${(props) => (props.negative ? '0.3rem 1rem' : '0.5rem 1.5rem')};
  transition: all 0.3s ease;
  -webkit-letter-spacing: 1px;
  -moz-letter-spacing: 1px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.negative ? '#d1343c' : '#49b34e')};
    border-color: ${(props) => (props.negative ? '#d1343c' : '#49b34e')};
    color: #ffffff;
  }
`;

export default StyledButton;
