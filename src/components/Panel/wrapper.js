import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledPanel,
  StyledPanelInnerContainer,
  StyledPanelOuterContainer,
} from './style';

const PanelWrapper = React.forwardRef((props, ref) => {
  const { children } = props;
  return (
    <StyledPanelOuterContainer>
      <StyledPanelInnerContainer ref={ref}>
        <StyledPanel>{children}</StyledPanel>
      </StyledPanelInnerContainer>
    </StyledPanelOuterContainer>
  );
});

PanelWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

PanelWrapper.defaultProps = {
  children: null,
};

export default PanelWrapper;
