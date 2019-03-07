import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import menuboard from '../images/menuboard.png';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    minHeight: '80vh',
    maxHeight: '70vh',
    backgroundImage: 'url(' + menuboard + ')',
    backgroundSize: 'contain',
    height: '100%',
    backgroundRepeat: 'no-repeat no-repeat',
    backgroundPosition: '100%'
  },
  center: {
    marginLeft: '12vh',
    marginTop: '6vh',
    textAlign: 'center'
  },
  menuTop: {
    marginBottom: '3vh',
  },
  innerMenu: {
    minHeight: '15vh'
  },
});


class MenuBoard extends Component {
  chosenMeat = () => {
    let meatObjects = this.props.chosenFoodObjects().filter(food => food.category === "Meat")
    return meatObjects.map(meat =>
      <div key={meat.id}>
        <Button onClick={() => this.props.handleMenuItemClick(2)} key={meat.id}>{meat.name}</Button>
      </div>
    )
  }

  chosenSweet = () => {
    const sweetObjects = this.props.chosenFoodObjects().filter(food => food.category === "Sweet")
    return sweetObjects.map(sweet =>
      <div key={sweet.id}>
        <Button onClick={() => this.props.handleMenuItemClick(8)} key={sweet.id}>{sweet.name}</Button>
      </div>
    )
  }

  chosenVeggie = () => {
    const veggieObjects = this.props.chosenFoodObjects().filter(food => food.category === "Vegetable")
    return veggieObjects.map(veggie =>
      <div key={veggie.id}>
        <Button onClick={() => this.props.handleMenuItemClick(3)} key={veggie.id}>{veggie.name}</Button>
      </div>
    )
  }

  chosenStarch = () => {
    const starchObjects = this.props.chosenFoodObjects().filter(food => food.category === "Starch")
    return starchObjects.map(starch =>
      <div key={starch.id}>
        <Button onClick={() => this.props.handleMenuItemClick(4)} key={starch.id}>{starch.name}</Button>
      </div>
    )
  }

  chosenDairy = () => {
    const dairyObjects = this.props.chosenFoodObjects().filter(food => food.category === "Dairy")
    return dairyObjects.map(dairy =>
      <div key={dairy.id}>
        <Button onClick={() => this.props.handleMenuItemClick(5)} key={dairy.id}>{dairy.name}</Button>
      </div>
    )
  }

  chosenHerb = () => {
    const herbObjects = this.props.chosenFoodObjects().filter(food => food.category === "Herb & Spice")
    return herbObjects.map(herb =>
      <div key={herb.id}>
        <Button onClick={() => this.props.handleMenuItemClick(6)} key={herb.id}>{herb.name}</Button>
      </div>
    )
  }

  chosenPrep = () => {
    const prepObjects = this.props.chosenFoodObjects().filter(food => food.category === "Preparation")
    return prepObjects.map(prep =>
      <div key={prep.id}>
        <Button onClick={() => this.props.handleMenuItemClick(7)} key={prep.id}>{prep.name}</Button>
      </div>
    )
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <div className={classes.center}>
          <Grid className={classes.menuTop}>
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
        </div>
      </div>
    )
  }
}

MenuBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBoard);
