import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import Cell from './Cell';
import { selectItem, startGame } from '../actions';

const styles = theme => ({
  paper: {
    miWidth: '100%',
    height: 'auto',
  },
  buttonStart: {
    margin: `${theme.spacing.unit * 2}px auto`,
  },
  container: {
    textAlign: 'center',
    width: '100%',
    overflow: 'auto',
  },
});

const GameBoard = ({ classes, cells, select, start }) => (
  <div className={classes.container}>
    <Paper className={classes.paper}>
      <Grid container>
        {cells.map(cell => (
          <Grid key={cell.id} item xs={3}>
            <Cell handleClick={() => select(cell.id)} {...cell} />
          </Grid>
        ))}
      </Grid>
    </Paper>
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

GameBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  cells: PropTypes.array.isRequired,
  select: PropTypes.func.isRequired,
  start: PropTypes.func.isRequired,
};

const styledComponent = withStyles(styles)(GameBoard);

const mapStateToProps = ({ cells }) => ({
  cells,
});

const mapDispatchToProps = dispatch => ({
  select: id => dispatch(selectItem(id)),
  start: () => dispatch(startGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(styledComponent);
