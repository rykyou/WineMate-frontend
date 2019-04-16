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

class Question5 extends Component {
  dairyCheckboxes = () => {
    const dairyArr = this.props.allFood.filter(food => food.category === "Dairy")
    return dairyArr.map((dairy, index) => (
      <FormControlLabel
          key={dairy.id}
          label={`${dairy.name} (${dairy.examples})`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[dairy.name]}
              value={dairy.name}
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
          <h1>Dairy:</h1>
        </Grid>
        <Grid className={classes.formMiddle}>
          <FormGroup>
            {this.dairyCheckboxes()}
          </FormGroup>
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

Question5.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question5);
