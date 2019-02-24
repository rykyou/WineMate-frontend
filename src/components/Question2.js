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

class Question2 extends Component {
  state = {
    "Red Meat": false,
    "Cured Meat": false,
    "Pork": false,
    "Poultry": false,
    "Mollusk": false,
    "Fish": false,
    "Lobster & Shellfish": false
  }

  handleChange = (event, meatName) => {
    this.setState({ [event.target.value]: event.target.checked });
  };

  meatCheckboxes = () => {
    const meatArr = this.props.allFood.filter(food => food.category === "Meat")

    let checkboxComponents = meatArr.map((meat, index) => (

        <FormControlLabel
          key={meat.id}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.state[meat.name]}
              value={meat.name}
              onChange={e => this.handleChange(e, meat.name)}
            />
          }
          label={meat.name}
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
        <h1>Question2</h1>
        <h3>Does it include meat?</h3>
        <h3>Choose as many protein options as needed...</h3>

        <FormGroup>
          {this.meatCheckboxes()}
        </FormGroup>

        <Button variant="contained" color="primary" onClick={this.props.goToPreviousQuestion}>
          Back
        </Button>

        <Button variant="contained" color="primary" onClick={this.handleNextButtonClick}>
          Next
        </Button>

      </div>
    )
  }
}


Question2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question2);
