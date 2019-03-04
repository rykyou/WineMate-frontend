import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '70vh'
  },
  menuTop: {
    height: '10vh'
  },
  innerMenu: {
    minHeight: '20vh'
  }
});


class MenuBoard extends Component {
  chosenMeat = () => {
    let meatObjects = this.props.chosenFoodObjects().filter(food => food.category === "Meat")
    return meatObjects.map(food =>
      <h3 onClick={() => this.props.handleMenuItemClick(2)} key={food.id}>{food.name}</h3>
    )
  }

  chosenSweet = () => {
    const sweetObjects = this.props.chosenFoodObjects().filter(food => food.category === "Sweet")
    return sweetObjects.map(sweet =>
      <h3 onClick={() => this.props.handleMenuItemClick(8)} key={sweet.id}>{sweet.name}</h3>
    )
  }

  chosenVeggie = () => {
    const veggieObjects = this.props.chosenFoodObjects().filter(food => food.category === "Vegetable")
    return veggieObjects.map(veggie =>
      <h3 onClick={() => this.props.handleMenuItemClick(3)} key={veggie.id}>{veggie.name}</h3>
    )
  }

  chosenStarch = () => {
    const starchObjects = this.props.chosenFoodObjects().filter(food => food.category === "Starch")
    return starchObjects.map(starch =>
      <h3 onClick={() => this.props.handleMenuItemClick(4)} key={starch.id}>{starch.name}</h3>
    )
  }

  chosenDairy = () => {
    const dairyObjects = this.props.chosenFoodObjects().filter(food => food.category === "Dairy")
    return dairyObjects.map(dairy =>
      <h3 onClick={() => this.props.handleMenuItemClick(5)} key={dairy.id}>{dairy.name}</h3>
    )
  }

  chosenHerb = () => {
    const herbObjects = this.props.chosenFoodObjects().filter(food => food.category === "Herb & Spice")
    return herbObjects.map(herb =>
      <h3 onClick={() => this.props.handleMenuItemClick(6)} key={herb.id}>{herb.name}</h3>
    )
  }

  chosenPrep = () => {
    const prepObjects = this.props.chosenFoodObjects().filter(food => food.category === "Preparation")
    return prepObjects.map(prep =>
      <h3 onClick={() => this.props.handleMenuItemClick(7)} key={prep.id}>{prep.name}</h3>
    )
  }


  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Grid className={classes.formTop}>
          <h1>Menu Board</h1>
        </Grid>
        <Grid container spacing={24}>
          <Grid className={classes.innerMenu} item xs={6}>
            {this.chosenMeat()}
            {this.chosenSweet()}
          </Grid>
          <Grid className={classes.innerMenu} item xs={6}>
            {this.chosenVeggie()}
          </Grid>
          <Grid className={classes.innerMenu} item xs={6}>
            {this.chosenStarch()}
          </Grid>
          <Grid className={classes.innerMenu} item xs={6}>
            {this.chosenDairy()}
          </Grid>
          <Grid className={classes.innerMenu} item xs={6}>
            {this.chosenHerb()}
          </Grid>
          <Grid className={classes.innerMenu} item xs={6}>
            {this.chosenPrep()}
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

MenuBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBoard);
