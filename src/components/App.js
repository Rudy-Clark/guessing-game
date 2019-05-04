import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import reducer from '../reducers';
import themeProvider from '../themeProvider';
import GameBoard from './GameBoard';

const store = createStore(reducer);

const style = theme => ({
  container: {
    maxWidth: '400px',
    margin: `${theme.spacing.unit * 8}px auto 0`,
  },
});

const App = ({ classes }) => (
  <Provider store={store}>
    <CssBaseline />
    <div className={classes.container}>
      <GameBoard />
    </div>
  </Provider>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default themeProvider(withStyles(style)(App));
