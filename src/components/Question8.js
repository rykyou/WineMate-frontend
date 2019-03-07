import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  formTop: {
    height: '10vh'
  },
  formMiddle: {
    height: '40vh',
    marginLeft: '5vh',
    paddingTop: '5vh'
  },
  button: {
    margin: '2vh',
    minHeight: '10vh',
    minWidth: '15vh'
  },
});

class Question8 extends Component {
  firstDessertCheckboxes = () => {
    const dessertArr = this.props.allFood.filter(food => food.category === "Sweet")
    return dessertArr.slice(0, 3).map((dessert, index) => (
      <FormControlLabel
          key={dessert.id}
          label={(dessert.examples) ? `${dessert.name} (${dessert.examples})` : `${dessert.name}`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[dessert.name]}
              value={dessert.name}
              onChange={(e) => this.props.handleCheckboxClick(e)}
            />
          }
      />)
    )
  }

  secondDessertCheckboxes = () => {
    const dessertArr = this.props.allFood.filter(food => food.category === "Sweet")
    return dessertArr.slice(3, 6).map((dessert, index) => (
      <FormControlLabel
          key={dessert.id}
          label={(dessert.examples) ? `${dessert.name} (${dessert.examples})` : `${dessert.name}`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[dessert.name]}
              value={dessert.name}
              onChange={(e) => this.props.handleCheckboxClick(e)}
            />
          }
      />)
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid className={classes.formTop}>
          <h1>What kind of dessert are you having?</h1>
        </Grid>
        <Grid container spacing={0} className={classes.formMiddle}>
          <Grid item xs={6}>
            <FormGroup>
              {this.firstDessertCheckboxes()}
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              {this.secondDessertCheckboxes()}
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.props.goBackToFirstQuestion}>
              Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.props.goToResultsPage}>
              Find My Pairing!
          </Button>
        </Grid>
      </div>
    )
  }
}


Question8.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question8);
