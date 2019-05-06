import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

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
    backgroundColor: '#fff',
  },
  selected: {
    border: '3px dashed #424242',
  },
  ...implementedColors,
});

const Cell = ({
  id,
  classes,
  color,
  selected,
  handleSelect,
  hidden,
  prepareToHide,
}) => (
  <button
    type="button"
    onKeyDown={() => {}}
    onClick={e => {
      e.stopPropagation();
      handleSelect();
    }}
    className={classnames(classes.button, classes[color], {
      [classes.selected]: selected,
    })}
  >
    {prepareToHide && (
      <SvgIcon
        viewBox="0 0 488.85 488.85"
        style={{ enableBackground: 'new 0 0 488.85 488.85' }}
      >
        <path
          d="M244.425,98.725c-93.4,0-178.1,51.1-240.6,134.1c-5.1,6.8-5.1,16.3,0,23.1c62.5,83.1,147.2,134.2,240.6,134.2
		s178.1-51.1,240.6-134.1c5.1-6.8,5.1-16.3,0-23.1C422.525,149.825,337.825,98.725,244.425,98.725z M251.125,347.025
		c-62,3.9-113.2-47.2-109.3-109.3c3.2-51.2,44.7-92.7,95.9-95.9c62-3.9,113.2,47.2,109.3,109.3
		C343.725,302.225,302.225,343.725,251.125,347.025z M248.025,299.625c-33.4,2.1-61-25.4-58.8-58.8c1.7-27.6,24.1-49.9,51.7-51.7
		c33.4-2.1,61,25.4,58.8,58.8C297.925,275.625,275.525,297.925,248.025,299.625z"
        />
      </SvgIcon>
    )}
    {hidden && <Overlay id={id} color={color} />}
  </button>
);

Cell.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
  prepareToHide: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default withStyles(styles)(Cell);
