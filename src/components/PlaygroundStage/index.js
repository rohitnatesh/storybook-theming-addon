import PropTypes from 'prop-types';
import React from 'react';
import Heading from '../Heading';
import SelectInput from '../SelectInput';
import ThemeFields from '../ThemeFields';
import Button from '../Button';
import StyledDiv from './style';

const PlaygroudStage = (props) => {
  const {
    activeTheme,
    changeActiveTheme,
    themes,
    toggleIsReviewing,
    updateTheme,
  } = props;

  return (
    <>
      <StyledDiv>
        <Heading>Active theme is </Heading>
        <SelectInput
          value={activeTheme}
          onChange={(e) => changeActiveTheme(e.target.value)}
        >
          {Object.keys(themes).map((item) => (
            <option value={item} key={`opt-${item}`}>
              {item}
            </option>
          ))}
        </SelectInput>
      </StyledDiv>
      <ThemeFields theme={themes[activeTheme]} updateTheme={updateTheme} />
      <StyledDiv>
        <Button onClick={toggleIsReviewing}>Review</Button>
      </StyledDiv>
    </>
  );
};

PlaygroudStage.propTypes = {
  activeTheme: PropTypes.string.isRequired,
  changeActiveTheme: PropTypes.func.isRequired,
  themes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  toggleIsReviewing: PropTypes.func.isRequired,
  updateTheme: PropTypes.func.isRequired,
};

export default PlaygroudStage;
