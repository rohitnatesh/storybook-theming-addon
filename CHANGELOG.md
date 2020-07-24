# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## `Unreleased`

- Add communication between decorator and panel.
- Add components and logic to allow tweaking of theme.
- Add functionality to export the tweaked theme files.
- Add review step before exporting the themes.
- Migrate state in Panel to Context.
- Style the panel components.

## `0.5.0` - 2020 July 24

- Stories updated based on changes in panel.
- Added `DECORATOR_MOUNTED`, `DECORATOR_UNMOUNTED` and `UPDATE_THEME` events in `events.js`.
- Installed `lodash.debounce` package.
- Changed `ThemingFields` component to `Fields`.
- Changed `ThemingPanel` component to `Panel`.
- Removed `rimraf` package.

## `0.4.0` - 2020 July 23

- Panel generates input fields based on the theme files obtained.
- Added `FormGroup`, `Heading`, `Label`, `SelectInput`, `TextInput`, `ThemingFields` components.
- Installed `eslint-plugin-react-hooks` plugin.

## `0.3.1` - 2020 July 21

- Added functionality in panel to obtain themes from decorator.
- Added `ThemingPanel` component.
- Added `REQUEST_INITIAL_THEME` and `INITIAL_THEME` events in `events.js`.
- Removed `prepare` from scripts.

## `0.3.0` - 2020 July 21

- Added `withTheming` decorator.
- Added `Loading` and `WithTheming` components.
- Added `isObjectEmpty` and `setPropertyByPath` functions in `helper.js`.
- Installed `styled-components`.
- Installed `babel-plugin-styled-components` plugin.

## `0.2.0` - 2020 July 20

- Added Theming panel in Storybook.
- Added `.nvmrc` with Node version.

## `0.1.0` - 2020 July 19

- Installed `babel` with `env` and `react` presets.
- Installed `eslint` with `eslint-config-airbnb` and `eslint-config-prettier`.
- Installed `rimraf` package to clean build files.
- Added Scripts: `build`, `clean`, `lint` and some others.
- Added `README.md` and `CHANGELOG.md`.
