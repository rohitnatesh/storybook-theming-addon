import styled from 'styled-components';

const StyledFormGroup = styled.div`
  background: ${(props) => (!(props.index % 2) ? `#defcff` : `#fff`)};
  box-sizing: border-box;
  border-left: 2px solid black;
  padding: 1rem 0 0.5rem 1.5rem;
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export default StyledFormGroup;
