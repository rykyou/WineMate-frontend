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
  vegetableCheckboxes = () => {
    const veggieArr = this.props.allFood.filter(food => food.category === "Vegetable")
    return veggieArr.map((veggie, index) => (
      <FormControlLabel
          key={veggie.id}
          label={`${veggie.name} (${veggie.examples})`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[veggie.name]}
              value={veggie.name}
              onChange={(e) => this.props.handleCheckboxClick(e)}
            />
          }
      />)
    )
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
          onClick={this.props.goToNextQuestion}>
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
