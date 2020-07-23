import styled from 'styled-components';

const StyledLabel = styled.label`
  display: inline-block;
  font-weight: ${(props) => (props.isRoot ? 'bold' : 'normal')};
  padding-bottom: 0.5rem;
`;

export default StyledLabel;
