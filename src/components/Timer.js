import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';

import { getFormattedTime } from '../utils';

const styles = theme => ({
  paper: {
    width: '100px',
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit,
  },
});
let timeoutId;
const Timer = ({ classes, startedAt, gameRun }) => {
  const [time, setTime] = useState('00:00');
  useEffect(() => {
    if (gameRun)
      timeoutId = setInterval(() => {
        const { sec, min } = getFormattedTime(startedAt);
        setTime(`${min}:${sec}`);
      }, 1000);
    return () => clearInterval(timeoutId);
  });

  return <Paper className={classes.paper}>{time}</Paper>;
};

Timer.propTypes = {
  classes: PropTypes.object.isRequired,
  gameRun: PropTypes.bool.isRequired,
  startedAt: PropTypes.number,
};

const styledComponent = withStyles(styles)(Timer);

const mapStateToProps = ({ timer }) => ({
  startedAt: timer.startedAt,
  gameRun: timer.gameRun,
});

export default connect(mapStateToProps)(styledComponent);
