import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, withStyles } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const styles = theme => ({
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

class Question6 extends Component {
  herbsCheckboxes = (index1, index2) => {
    const herbsArr = this.props.allFood.filter(food => food.category === "Herb & Spice")
    return herbsArr.slice(index1, index2).map((herb, index) => (
      <FormControlLabel
          key={herb.id}
          label={(herb.examples) ? `${herb.name} (${herb.examples})` : `${herb.name}`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[herb.name]}
              value={herb.name}
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
          <h1>Herb & Spice:</h1>
        </Grid>
        <Grid container spacing={0} className={classes.formMiddle}>
          <Grid item xs={6}>
            <FormGroup>
              {this.herbsCheckboxes(0, 6)}
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              {this.herbsCheckboxes(6, 12)}
            </FormGroup>
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.props.goToPreviousQuestion}>
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

Question6.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question6);
