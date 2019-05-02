import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import themeProvider from './themeProvider';

const style = () => ({
  container: {
    maxWidth: '360px',
    margin: '0 auto',
  },
});

const App = ({ classes }) => (
  <div className={classes.container}>
    <h1>Hello World</h1>
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default themeProvider(withStyles(style)(App));
