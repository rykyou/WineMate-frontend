import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, withStyles } from '@material-ui/core';
// import menuboard from '../images/menuboard.png';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    minHeight: '80vh',
    maxHeight: '80vh',
    height: '100%',
    backgroundPosition: '100%',
    textAlign: 'center'
  },
  menuTop: {
    marginBottom: '3vh',
  },
  container: {
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: '70vh',
    margin: '2vh',
    alignItems: 'center'
  },
  button: {
    fontFamily: 'Permanent Marker'
  }
});


class MenuBoard extends Component {
  chosenFood = () => {
    return this.props.chosenFoodObjects().map(food =>
      <Button
        key={food.id}
        color="primary"
        size="large"
        className={this.props.classes.button}
        onClick={(e) => this.removeFoodFromMenu(e.target.innerHTML)}>
        {food.name}
      </Button>
    )
  }

  sanitizedFoodName = (textToChange) => {
    return textToChange.split(' ').map(char => char === "&amp;" ? "&" : char).join(' ')
  }

  removeFoodFromMenu = (text) => {
    this.props.handleRemoveFoodFromMenu(this.sanitizedFoodName(text))
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <Grid className={classes.menuTop}>
          <h1>Menu Board</h1>
        </Grid>
        <Grid className={classes.container}>
          {this.chosenFood()}
        </Grid>
      </div>
    )
  }
}

MenuBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBoard);
