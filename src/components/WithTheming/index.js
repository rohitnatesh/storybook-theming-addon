import { addons } from '@storybook/addons';
import PropTypes from 'prop-types';
import React from 'react';
import events from '../../events';
import { isObjectEmpty } from '../../helper';
import Loading from '../Loading';

class WithTheming extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTheme: {},
    };
    this.mounted = false;
    this.channel = addons.getChannel();

    const { allThemes } = this.props;

    this.channel.on(events.REQUEST_INITIAL_THEME, () =>
      this.channel.emit(events.INITIAL_THEME, allThemes)
    );
  }

  componentDidMount() {
    this.channel.on(events.UPDATE_THEME, (payload) => {
      if (this.mounted) this.setState({ activeTheme: { ...payload } });
    });
    this.mounted = true;
    this.channel.emit(events.DECORATOR_MOUNTED);
  }

  componentWillUnmount() {
    this.channel.emit(events.DECORATOR_UNMOUNTED);
    this.mounted = false;
    this.channel.removeListener(events.UPDATE_THEME, (payload) => {
      if (this.mounted) this.setState({ activeTheme: { ...payload } });
    });
  }

  render() {
    const { themeProvider, children } = this.props;
    const { activeTheme } = this.state;
    const ThemeProvider = themeProvider;

    return !isObjectEmpty(activeTheme) ? (
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    ) : (
      <Loading />
    );
  }
}

WithTheming.propTypes = {
  allThemes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  themeProvider: PropTypes.func.isRequired,
};

WithTheming.defaultProps = {
  children: null,
};

export default WithTheming;
