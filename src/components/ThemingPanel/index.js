import { STORIES_CONFIGURED } from '@storybook/core-events';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import events from '../../events';
import { isObjectEmpty } from '../../helper';
import Loading from '../Loading';

const ThemingPanel = (props) => {
  const { api } = props;

  const [allThemes, setAllThemes] = useState({});

  useEffect(() => {
    api.on(STORIES_CONFIGURED, () => {
      const timeout = setTimeout(() => api.emit(events.REQUEST_INITIAL_THEME), 500);
      return () => clearTimeout(timeout);
    });
  }, []);

  useEffect(() => {
    api.on(events.INITIAL_THEME, (payLoad) => setAllThemes({ ...payLoad }));
  }, []);

  return !isObjectEmpty(allThemes) ? (
    <span>{JSON.stringify(allThemes)}</span>
  ) : (
    <Loading />
  );
};

ThemingPanel.propTypes = {
  api: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ThemingPanel;
