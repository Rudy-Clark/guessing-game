import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { choiceItem } from '../actions';

const styles = () => ({
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
});

const Overlay = ({ color, handleChoice, classes }) => (
  <div
    role="button"
    onClick={e => {
      e.stopPropagation();
      handleChoice(color);
    }}
    onKeyDown={() => {}}
    tabIndex={-1}
    className={classes.overlay}
  />
);

Overlay.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  handleChoice: PropTypes.func.isRequired,
};

const styledComponent = withStyles(styles)(Overlay);

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  handleChoice: (color, id) => dispatch(choiceItem(color, id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledComponent);
