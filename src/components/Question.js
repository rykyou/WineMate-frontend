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

  checkboxes = (category) => {
    const arr = this.props.allFood.filter(food => food.category === this.props.questionCategory)
    // return arr.slice(index1, index2).map((veggie, index) => (
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
          <Grid item xs={6}>
            <FormGroup>
              {this.checkboxes(this.props.questionCategory)}
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              {this.checkboxes(this.props.questionCategory)}
            </FormGroup>
          </Grid>
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
