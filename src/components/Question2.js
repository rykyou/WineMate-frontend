import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, withStyles } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  formTop: {
    height: '5vh'
  },
  formMiddle: {
    height: '45vh',
    marginLeft: '3vh'
  },
  button: {
    margin: '2vh',
    height: '8vh',
    width: '12vh'
  },
});

class Question2 extends Component {
  meatCheckboxes = (index1, index2) => {
    const meatArr = this.props.allFood.filter(food => food.category === "Meat")
    return meatArr.slice(index1, index2).map((meat, index) => (
      <FormControlLabel
          key={meat.id}
          label={`${meat.name} (${meat.examples})`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[meat.name]}
              value={meat.name}
              onChange={(e) => this.props.handleCheckboxClick(e)}
            />
          }
      />)
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid className={classes.formTop}>
          <h1>Protein:</h1>
        </Grid>
        <Grid container spacing={0} className={classes.formMiddle}>
          <Grid item xs={6}>
            <FormGroup>
              {this.meatCheckboxes(0, 4)}
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              {this.meatCheckboxes(4, 7)}
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
            onClick={this.props.goToNextQuestion}>
              Next
          </Button>
        </Grid>
      </div>
    )
  }
}


Question2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question2);
