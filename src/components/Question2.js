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
    height: '10vh'
  },
  formMiddle: {
    height: '40vh',
    marginLeft: '5vh'
  },
  button: {
    margin: '2vh',
    minHeight: '8vh',
    minWidth: '12vh'
  },
});

class Question2 extends Component {
  meatCheckboxes = () => {
    const meatArr = this.props.allFood.filter(food => food.category === "Meat")
    return meatArr.map((meat, index) => (
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
          <h1>Does it include meat?</h1>
          <h3>Choose as many protein options as needed...</h3>
        </Grid>
        <Grid className={classes.formMiddle}>
          <FormGroup>
            {this.meatCheckboxes()}
          </FormGroup>
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
