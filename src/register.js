import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import React from 'react';
import ThemingPanel from './components/ThemingPanel';

addons.register('storybook-theming-addon', (api) => {
  addons.add('storybook-theming-addon/panel', {
    title: 'Theming',
    type: types.PANEL,
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <ThemingPanel api={api} />
      </AddonPanel>
    ),
  });
});
