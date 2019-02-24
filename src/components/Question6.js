import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';


const styles = {
  checked: {},
};

class Question6 extends Component {
  state = {
    "White Starches": false,
    "Whole Wheat Grains": false,
    "Sweet Starchy Vegetables": false,
    "Potato": false,
  }

  handleChange = (event) => {
    this.setState({ [event.target.value]: event.target.checked });
  };

  starchCheckboxes = () => {
    const starchArr = this.props.allFood.filter(food => food.category === "Starch")

    let checkboxComponents = starchArr.map((starch, index) => (

        <FormControlLabel
          key={starch.id}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.state[starch.name]}
              value={starch.name}
              onChange={this.handleChange}
            />
          }
          label={(starch.examples) ? `${starch.name} (${starch.examples})` : `${starch.name}`}
        />

    ))

    return checkboxComponents
  }

  handleNextButtonClick = () => {
    this.props.goToNextQuestion();

    let chosenFoodNames = [];
    for (const key in this.state) {
      if (this.state[key]) {
        chosenFoodNames.push(key)
      }
    }
    this.props.updateWineScores(chosenFoodNames);
  }

  render() {
    return (
      <div>
        <h1>Question6</h1>
        <h3>Starch:</h3>

        <FormGroup>
          {this.starchCheckboxes()}
        </FormGroup>

        <Button
          variant="contained"
          color="primary"
          onClick={this.props.goToPreviousQuestion}>
            Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={this.handleNextButtonClick}>
            Next
        </Button>

      </div>
    )
  }
}

Question6.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question6);
// export default Question6;
