import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import Timer from './Timer';
import Cell from './Cell';
import { calcResult } from '../reselect';
import { selectItem, startGame, hideCells, endGame } from '../actions';
import { getFormattedTime } from '../utils';

const styles = theme => ({
  paper: {
    minWidth: '100%',
    height: 'auto',
  },
  buttonStart: {
    margin: `${theme.spacing.unit * 5}px auto`,
  },
  container: {
    textAlign: 'center',
    width: '100%',
    overflow: 'auto',
  },
});

const GameBoard = ({ classes, cells, select, start, result, timer, end }) => {
  if (result.attempts === 8 && timer.gameRun) {
    const { min, sec } = getFormattedTime(timer.startedAt);
    const message = `
    |||| Game Over ||||
    Time ${min}:${sec}
    Found: ${result.found} / ${result.total}
    ${result.found === 8 ? 'You won!' : 'Try Again'}
    `;
    end();
    window.alert(message);
  }
  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container>
          {cells.map(cell => (
            <Grid key={cell.id} item xs={3}>
              <Cell
                handleSelect={() => {
                  if (cell.done) return;
                  select(cell.id);
                }}
                {...cell}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Timer />
      <Button
        onClick={start}
        className={classes.buttonStart}
        variant="contained"
        color="primary"
      >
        Start Game
      </Button>
    </div>
  );
};

GameBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  timer: PropTypes.object.isRequired,
  cells: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
  end: PropTypes.func.isRequired,
};

const styledComponent = withStyles(styles)(GameBoard);

const mapStateToProps = ({ cells, timer }) => ({
  cells,
  result: calcResult(cells),
  timer,
});

const mapDispatchToProps = dispatch => ({
  select: id => dispatch(selectItem(id)),
  start: () => {
    dispatch(startGame());
    setTimeout(() => {
      dispatch(hideCells());
    }, 3000);
  },
  end: () => dispatch(endGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledComponent);
