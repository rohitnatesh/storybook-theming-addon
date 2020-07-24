import { STORIES_CONFIGURED } from '@storybook/core-events';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import events from '../../events';
import { isObjectEmpty, setPropertyByPath } from '../../helper';
import Fields from '../Fields';
import Heading from '../Heading';
import Loading from '../Loading';
import SelectInput from '../SelectInput';
import { StyledActiveThemeWrapper, StyledPanel } from './panel.style';

const Panel = (props) => {
  const { api } = props;

  const debounceRate = 500;
  const defaultTheme = { themes: {} }; // copy of initial theme
  const [activeTheme, setActiveTheme] = useState(null); // name of active theme
  const [isTyping, setIsTyping] = useState(false); // is user typing
  const [mounted, setMounted] = useState(false); // mount status of wrapper
  const [themes, setThemes] = useState({}); // all the themes and changes will be updated here

  const setDefaultTheme = (payload) => {
    defaultTheme.themes = payload;
  };

  const initializeThemes = (payload) =>
    setThemes({ ...JSON.parse(JSON.stringify(payload)) });

  const changeActiveTheme = (themeName) => setActiveTheme(themeName);

  const setIsTypingFalse = debounce(() => setIsTyping(false), debounceRate);

  const updateTheme = (path, value) => {
    setIsTyping(true);
    setThemes((prev) => ({
      ...prev,
      [activeTheme]: { ...setPropertyByPath(prev[activeTheme], path, value) },
    }));
    setIsTypingFalse();
  };

  const updateMounted = (newMounted) => setMounted(newMounted);

  useEffect(() => {
    api.on(STORIES_CONFIGURED, () =>
      setTimeout(() => api.emit(events.REQUEST_INITIAL_THEME), 50)
    );
    api.on(events.INITIAL_THEME, (payload) => {
      setDefaultTheme(payload);
      initializeThemes(payload);
      changeActiveTheme(Object.keys(payload)[0]);
    });
    api.on(events.DECORATOR_MOUNTED, () => updateMounted(true));
    api.on(events.DECORATOR_UNMOUNTED, () => updateMounted(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  useEffect(() => {
    if (!isObjectEmpty(themes) && activeTheme !== null && !isTyping && mounted)
      api.emit(events.UPDATE_THEME, themes[activeTheme]);
  }, [activeTheme, api, isTyping, mounted, themes]);

  return !isObjectEmpty(themes) && activeTheme !== null ? (
    <StyledPanel>
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
      <Fields theme={themes[activeTheme]} updateTheme={updateTheme} />
    </StyledPanel>
  ) : (
    <Loading />
  );
};

Panel.propTypes = {
  api: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Panel;
