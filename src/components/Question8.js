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

class Question8 extends Component {
  state = {
    "Fruit & Berries": false,
    "Vanilla & Caramel": false,
    "Chocolate & Coffee": false
  }

  handleChange = (event) => {
    this.setState({ [event.target.value]: event.target.checked });
  };

  dessertCheckboxes = () => {
    const dessertArr = this.props.allFood.filter(food => food.category === "Sweet")

    let checkboxComponents = dessertArr.map((dessert, index) => (

        <FormControlLabel
          key={dessert.id}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.state[dessert.name]}
              value={dessert.name}
              onChange={this.handleChange}
            />
          }
          label={(dessert.examples) ? `${dessert.name} (${dessert.examples})` : `${dessert.name}`}
        />

    ))

    return checkboxComponents
  }

  handleNextButtonClick = () => {
    this.props.goToResultsPage();

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
        <h1>Question8</h1>
        <h3>What kind of dessert are you having?</h3>

        <FormGroup>
          {this.dessertCheckboxes()}
        </FormGroup>

        <Button
          variant="contained"
          color="primary"
          onClick={this.props.goBackToFirstQuestion}>
            Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={this.handleNextButtonClick}>
            Find My Pairing!
        </Button>

      </div>
    )
  }
}


Question8.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question8);
// export default Question8;
