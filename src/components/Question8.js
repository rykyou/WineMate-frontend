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
  dessertCheckboxes = () => {
    const dessertArr = this.props.allFood.filter(food => food.category === "Sweet")
    return dessertArr.map((dessert, index) => (
      <FormControlLabel
          key={dessert.id}
          label={(dessert.examples) ? `${dessert.name} (${dessert.examples})` : `${dessert.name}`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[dessert.name]}
              value={dessert.name}
              onChange={(e) => this.props.handleCheckboxClick(e)}
            />
          }
      />)
    )
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
        <h1>What kind of dessert are you having?</h1>

        <FormGroup>
          {this.dessertCheckboxes()}
        </FormGroup>

        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.goBackToFirstQuestion}>
            Back
        </Button>

        <Button
          variant="contained"
          color="secondary"
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
