import { STORIES_CONFIGURED } from '@storybook/core-events';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import events from '../../events';
import { isObjectEmpty, setPropertyByPath } from '../../helper';
import Loading from '../Loading';
import PlaygroudStage from '../PlaygroundStage';
import ReviewStage from '../ReviewStage';
import PanelWrapper from './wrapper';

const Panel = (props) => {
  const { api } = props;

  const debounceRate = 500;
  const [activeTheme, setActiveTheme] = useState(null); // name of active theme
  const [defaultTheme, setDefaultTheme] = useState({}); // copy of initial theme
  const [isTyping, setIsTyping] = useState(false); // is user typing
  const [isReviewing, setIsReviewing] = useState(false); // is user reviewing changes
  const [mounted, setMounted] = useState(false); // mount status of wrapper
  const [themes, setThemes] = useState({}); // all the themes and changes will be updated here

  const containerRef = useRef(null);

  const initializeThemes = (payload) => {
    setDefaultTheme(payload);
    setThemes({ ...JSON.parse(JSON.stringify(payload)) });
  };

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

  const toggleIsReviewing = () => setIsReviewing((prev) => !prev);

  const updateMounted = (newMounted) => setMounted(newMounted);

  useEffect(() => {
    api.on(STORIES_CONFIGURED, () =>
      setTimeout(() => api.emit(events.REQUEST_INITIAL_THEME), 50)
    );
    api.on(events.INITIAL_THEME, (payload) => {
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

  useEffect(() => {
    if (containerRef.current) containerRef.current.scrollTop = 0;
  }, [containerRef, isReviewing]);

  return (
    <PanelWrapper ref={containerRef}>
      {!isObjectEmpty(themes) && activeTheme !== null ? (
        <>
          {!isReviewing ? (
            <PlaygroudStage
              activeTheme={activeTheme}
              changeActiveTheme={changeActiveTheme}
              themes={themes}
              updateTheme={updateTheme}
              toggleIsReviewing={toggleIsReviewing}
            />
          ) : (
            <ReviewStage
              newTheme={themes[activeTheme]}
              oldTheme={defaultTheme[activeTheme]}
              toggleIsReviewing={toggleIsReviewing}
            />
          )}
        </>
      ) : (
        <Loading />
      )}
    </PanelWrapper>
  );
};

Panel.propTypes = {
  api: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Panel;
