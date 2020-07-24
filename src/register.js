import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import React from 'react';
import Panel from './components/Panel';

addons.register('storybook-theming-addon', (api) => {
  addons.add('storybook-theming-addon/panel', {
    title: 'Theming',
    type: types.PANEL,
    // eslint-disable-next-line react/prop-types
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <Panel api={api} />
      </AddonPanel>
    ),
  });
});
