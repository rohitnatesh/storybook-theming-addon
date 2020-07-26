import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import CodePreview from '../CodePreview';
import Heading from '../Heading';
import StyledDiv, { StyledButtonWrapper } from './style';

const ReviewStage = (props) => {
  const { newTheme, oldTheme, toggleIsReviewing } = props;

  return (
    <div>
      <StyledButtonWrapper>
        <Button negative onClick={toggleIsReviewing}>
          Back
        </Button>
      </StyledButtonWrapper>
      <StyledDiv>
        <Heading>Review changes</Heading>
      </StyledDiv>
      <CodePreview newTheme={newTheme} oldTheme={oldTheme} />
    </div>
  );
};

ReviewStage.propTypes = {
  newTheme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  oldTheme: PropTypes.oneOfType([PropTypes.object]).isRequired,
  toggleIsReviewing: PropTypes.func.isRequired,
};

export default ReviewStage;
