import styled from 'styled-components';

export const StyledPanel = styled.div`
  margin: 1rem;
  min-width: 450px;
  position: relative;
`;

export const StyledPanelInnerContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  overflow: auto;
`;

export const StyledPanelOuterContainer = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
`;
