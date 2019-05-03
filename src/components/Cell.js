import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';

const styles = () => ({
  cell: {
    miWidth: '100%',
    height: '100px',
    border: '1px solid #e3e3e3',
    cursor: 'pointer',
  },
  default: {
    backgroundColor: 'transparency',
  },
  red: {
    backgroundColor: red[500],
  },
  clicked: {
    border: '3px dashed #e9e9e9',
  },
});

const Cell = ({ classes, color, clicked }) => (
  <div
    className={classnames(classes.cell, classes[color], {
      [classes.clicked]: clicked,
    })}
  />
);

Cell.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Cell);
