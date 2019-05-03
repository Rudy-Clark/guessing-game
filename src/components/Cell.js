import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { colors } from '../utils';

const implementedColors = colors.reduce((object, key) => {
  // eslint-disable-next-line no-param-reassign
  object[key] = {
    backgroundColor: key,
  };
  return object;
}, {});

const styles = () => ({
  cell: {
    minWidth: '100%',
    height: '100px',
    border: '1px solid #e3e3e3',
    cursor: 'pointer',
    display: 'block',
    outline: 'none',
  },
  default: {
    backgroundColor: '#fff',
  },
  clicked: {
    border: '3px dashed #424242',
  },
  ...implementedColors,
});

const Cell = ({ classes, color, clicked, handleClick }) => (
  <button
    tabIndex={-1}
    type="button"
    onClick={handleClick}
    className={classnames(classes.cell, classes[color], {
      [classes.clicked]: clicked,
    })}
  />
);

Cell.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  clicked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Cell);
