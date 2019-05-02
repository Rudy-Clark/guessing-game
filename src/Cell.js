import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
  cell: {
    miWidth: '100%',
    height: '100px',
    border: '1px solid #e3e3e3',
    cursor: 'pointer',
  },
});

const Cell = ({ classes }) => <div className={classes.cell} />;

Cell.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cell);
