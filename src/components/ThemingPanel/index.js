import { STORIES_CONFIGURED } from '@storybook/core-events';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import events from '../../events';
import { isObjectEmpty, setPropertyByPath } from '../../helper';
import Heading from '../Heading';
import Loading from '../Loading';
import SelectInput from '../SelectInput';
import ThemingFields from '../ThemingFields';
import { StyledActiveThemeWrapper, StyledThemingPanel } from './themingPanel.style';

const ThemingPanel = (props) => {
  const { api } = props;

  const defaultTheme = { themes: {} }; // copy of initial theme obtained
  const [themes, setThemes] = useState({}); // all the themes and changes will updated here
  const [activeTheme, setActiveTheme] = useState(null); // name of active theme

  const setDefaultTheme = (payload) => {
    defaultTheme.themes = payload;
  };

  const initializeAllThemes = (payload) =>
    setThemes({ ...JSON.parse(JSON.stringify(payload)) });

  const changeActiveTheme = (themeName) => setActiveTheme(themeName);

  const updateTheme = (path, value) =>
    setThemes((prev) => ({
      ...prev,
      [activeTheme]: { ...setPropertyByPath(prev[activeTheme], path, value) },
    }));

  useEffect(() => {
    api.on(STORIES_CONFIGURED, () =>
      setTimeout(() => api.emit(events.REQUEST_INITIAL_THEME), 500)
    );
    api.on(events.INITIAL_THEME, (payload) => {
      setDefaultTheme(payload);
      initializeAllThemes(payload);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  useEffect(() => {
    if (!isObjectEmpty(themes)) changeActiveTheme(Object.keys(themes)[0]);
  }, [themes]);

  return !isObjectEmpty(themes) && activeTheme !== null ? (
    <StyledThemingPanel>
      <StyledActiveThemeWrapper>
        <Heading>Active theme is </Heading>
        <SelectInput
          value={activeTheme}
          onChange={(e) => changeActiveTheme(e.target.value)}
        >
          {Object.keys(themes).map((item) => (
            <option key={`opt-${item}`}>{item}</option>
          ))}
        </SelectInput>
      </StyledActiveThemeWrapper>
      <ThemingFields theme={themes[activeTheme]} updateTheme={updateTheme} />
    </StyledThemingPanel>
  ) : (
    <Loading />
  );
};

ThemingPanel.propTypes = {
  api: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ThemingPanel;
