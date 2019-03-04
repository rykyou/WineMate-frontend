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


const styles = {
  formTop: {
    height: '10vh'
  },
  formMiddle: {
    height: '45vh',
    marginLeft: '5vh'
  }
};

class Question6 extends Component {
  herbsCheckboxes = () => {
    const herbsArr = this.props.allFood.filter(food => food.category === "Herb & Spice")
    return herbsArr.map((herb, index) => (
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
        <Grid className={classes.formMiddle}>
          <FormGroup>
            {this.herbsCheckboxes()}
          </FormGroup>
        </Grid>
        <Grid container justify="space-between">
          <Button
            variant="contained"
            color="secondary"
            onClick={this.props.goToPreviousQuestion}>
              Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
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
// export default Question6;
