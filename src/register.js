import { addons, types } from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import React from 'react';

addons.register('storybook-theming-addon', () => {
  addons.add('storybook-theming-addon/panel', {
    title: 'Theming',
    type: types.PANEL,
    render: ({ active, key }) => <AddonPanel active={active} key={key} />,
  });
});
