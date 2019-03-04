import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '70vh'
  },
});


class MenuBoard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        Menu Board
        {this.props.selectedFoodsForMenuBoard().map(foodName => <h3 key={foodName}>{foodName}</h3>)}
      </Paper>
    )
  }
}

MenuBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBoard);
