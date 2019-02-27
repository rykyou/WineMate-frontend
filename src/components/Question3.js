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

class Question3 extends Component {
  state = {
    "Alliums": false,
    "Green Vegetables": false,
    "Root Vegetables & Squash": false,
    "Nightshades": false,
    "Funghi": false,
    "Nuts & Seeds": false,
    "Beans & Peas": false
  }

  handleChange = (event) => {
    this.setState({ [event.target.value]: event.target.checked });
  };

  vegetableCheckboxes = () => {
    const veggieArr = this.props.allFood.filter(food => food.category === "Vegetable")

    let checkboxComponents = veggieArr.map((veggie, index) => (

        <FormControlLabel
          key={veggie.id}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.state[veggie.name]}
              value={veggie.name}
              onChange={this.handleChange}
            />
          }
          label={`${veggie.name} (${veggie.examples})`}
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
        <h1>Vegetables:</h1>

        <FormGroup>
          {this.vegetableCheckboxes()}
        </FormGroup>

        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.goToPreviousQuestion}>
            Back
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleNextButtonClick}>
            Next
        </Button>

      </div>
    )
  }
}

Question3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question3);
// export default Question3;
