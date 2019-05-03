import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import Cell from './Cell';

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

const GameBoard = ({ classes, cells }) => (
  <div className={classes.container}>
    <Paper className={classes.paper}>
      <Grid container>
        {cells.map(cell => (
          <Grid key={cell.id} item xs={3}>
            <Cell
              // onClick={}
              {...cell}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
    <Button className={classes.buttonStart} variant="contained" color="primary">
      Start Game
    </Button>
  </div>
);

GameBoard.propTypes = {
  classes: PropTypes.object.isRequired,
  cells: PropTypes.array.isRequired,
};

const styledComponent = withStyles(styles)(GameBoard);

const mapStateToProps = ({ cells }) => ({
  cells,
});

export default connect(mapStateToProps)(styledComponent);
