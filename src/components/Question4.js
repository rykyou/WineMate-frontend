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

class Question4 extends Component {
  firstStarchCheckboxes = () => {
    const starchArr = this.props.allFood.filter(food => food.category === "Starch")
    return starchArr.slice(0, 4).map((starch, index) => (
      <FormControlLabel
          key={starch.id}
          label={(starch.examples) ? `${starch.name} (${starch.examples})` : `${starch.name}`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[starch.name]}
              value={starch.name}
              onChange={(e) => this.props.handleCheckboxClick(e)}
            />
          }
      />)
    )
  }

  secondStarchCheckboxes = () => {
    const starchArr = this.props.allFood.filter(food => food.category === "Starch")
    return starchArr.slice(4, 8).map((starch, index) => (
      <FormControlLabel
          key={starch.id}
          label={(starch.examples) ? `${starch.name} (${starch.examples})` : `${starch.name}`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[starch.name]}
              value={starch.name}
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
          <h1>Starch:</h1>
        </Grid>
        <Grid container spacing={0} className={classes.formMiddle}>
          <Grid item xs={6}>
            <FormGroup>
              {this.firstStarchCheckboxes()}
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              {this.secondStarchCheckboxes()}
            </FormGroup>
          </Grid>
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

Question4.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question4);
// export default Question6;
