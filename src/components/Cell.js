import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { colors } from '../utils';
import Overlay from './Overlay';

const implementedColors = colors.reduce((object, key) => {
  // eslint-disable-next-line no-param-reassign
  object[key] = {
    backgroundColor: key,
  };
  return object;
}, {});

const styles = () => ({
  button: {
    minWidth: '100%',
    height: '100px',
    border: '1px solid #e3e3e3',
    cursor: 'pointer',
    display: 'block',
    outline: 'none',
    position: 'relative',
    zIndex: 12,
    padding: 0,
  },
  default: {
    backgroundColor: '#fff',
  },
  selected: {
    border: '3px dashed #424242',
  },
  overlay: {
    minWidth: '100%',
    height: '100%',
    top: 0,
    left: 0,
    outline: 'none',
    backgroundColor: '#fff',
    border: '1px solid #e3e3e3',
    position: 'absolute',
    zIndex: 999,
    cursor: 'pointer',
  },
  ...implementedColors,
});

const Cell = ({ id, classes, color, selected, handleSelect, hidden }) => (
  <button
    type="button"
    onKeyDown={() => {}}
    onClick={e => {
      e.stopPropagation();
      handleSelect();
    }}
    className={classnames(classes.button, classes[color || 'default'], {
      [classes.selected]: selected,
    })}
  >
    {hidden && <Overlay id={id} color={color} />}
  </button>
);

Cell.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default withStyles(styles)(Cell);
