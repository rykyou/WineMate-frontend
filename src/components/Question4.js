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

class Question4 extends Component {
  starchCheckboxes = () => {
    const starchArr = this.props.allFood.filter(food => food.category === "Starch")
    return starchArr.map((starch, index) => (
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

  // handleNextButtonClick = () => {
  //   this.props.goToNextQuestion();
  //
  //   let chosenFoodNames = [];
  //   for (const key in this.state) {
  //     if (this.state[key]) {
  //       chosenFoodNames.push(key)
  //     }
  //   }
  //   this.props.updateWineScores(chosenFoodNames);
  // }

  render() {
    return (
      <div>
        <h1>Starch:</h1>

        <FormGroup>
          {this.starchCheckboxes()}
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
          onClick={this.props.goToNextQuestion}>
            Next
        </Button>

      </div>
    )
  }
}

Question4.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question4);
// export default Question6;
