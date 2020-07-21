import React from 'react';
import WithTheming from './components/WithTheming';

const withTheming = (args) => {
  const { themeProvider, allThemes } = args;

  if (!themeProvider)
    throw Error('Missing `ThemeProvider` argument in withTheming decorator.');
  if (!allThemes)
    throw Error('Missing `allThemes` argument in withTheming decorator');

  return (storyFn) => (
    <WithTheming themeProvider={themeProvider} allThemes={allThemes}>
      {storyFn()}
    </WithTheming>
  );
};

export default withTheming;
