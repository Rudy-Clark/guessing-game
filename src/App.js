import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import themeProvider from './themeProvider';
import GameBoard from './GameBoard';

const style = theme => ({
  container: {
    maxWidth: '400px',
    margin: `${theme.spacing.unit * 8}px auto 0`,
  },
});

const App = ({ classes }) => (
  <div className={classes.container}>
    <GameBoard />
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default themeProvider(withStyles(style)(App));
