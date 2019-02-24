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

class Question5 extends Component {
  state = {
    "Black Pepper": false,
    "Red Pepper": false,
    "Hot & Spicy": false,
    "Herbs": false,
    "Baking Spices": false,
    "Exotic & Aromatic Spices": false,
  }

  handleChange = (event) => {
    this.setState({ [event.target.value]: event.target.checked });
  };

  herbsCheckboxes = () => {
    const herbsArr = this.props.allFood.filter(food => food.category === "Herb & Spice")

    let checkboxComponents = herbsArr.map((herb, index) => (

        <FormControlLabel
          key={herb.id}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.state[herb.name]}
              value={herb.name}
              onChange={this.handleChange}
            />
          }
          label={(herb.examples) ? `${herb.name} (${herb.examples})` : `${herb.name}`}
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
        <h1>Question5</h1>
        <h3>Herb & Spice:</h3>

        <FormGroup>
          {this.herbsCheckboxes()}
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

Question5.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question5);
// export default Question5;
