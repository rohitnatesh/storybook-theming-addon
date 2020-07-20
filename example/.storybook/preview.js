import { addDecorator } from '@storybook/react';
import { withTheming } from 'storybook-theming-addon/lib';
import { ThemeProvider } from 'styled-components';
import * as allThemes from '../src/themes';

addDecorator(withTheming({ themeProvider: ThemeProvider, allThemes: allThemes }));
