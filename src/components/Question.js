import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, withStyles } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const styles = theme => ({
  formTop: {
    height: '5vh'
  },
  formMiddle: {
    height: '45vh',
    marginLeft: '5vh'
  },
  button: {
    margin: '2vh',
    minHeight: '8vh',
    minWidth: '12vh'
  },
});

class Question extends Component {

  checkboxGrid = (category) => {
    const foodArr = this.props.allFood.filter(food => food.category === this.props.questionCategory)
    const midpoint = Math.round(foodArr.length/2)

    if (midpoint > 3) {
      const firstFoodArr = foodArr.slice(0, midpoint)
      const secondFoodArr = foodArr.slice(midpoint)

      return <React.Fragment>
        <Grid item xs={6}>
          <FormGroup>
            {this.checkboxes(firstFoodArr)}
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <FormGroup>
            {this.checkboxes(secondFoodArr)}
          </FormGroup>
        </Grid>
      </React.Fragment>
    } else {
      return <FormGroup>{this.checkboxes(foodArr)}</FormGroup>
    }
  }

  checkboxes = (arr) => {
    return arr.map((food, index) => (
      <FormControlLabel
          key={food.id}
          label={(food.examples) ? `${food.name} (${food.examples})` : `${food.name}`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[food.name]}
              value={food.name}
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
          <h1>{this.props.questionCategory}:</h1>
        </Grid>
        <Grid container spacing={0} className={classes.formMiddle}>
          {this.checkboxGrid(this.props.questionCategory)}
        </Grid>
        <Grid container justify="space-between">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.props.changeQuestionNumber(this.props.questionNum - 1)}>
              Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.props.changeQuestionNumber(this.props.questionNum + 1)}>
              Next
          </Button>
        </Grid>
      </div>
    )
  }
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);
