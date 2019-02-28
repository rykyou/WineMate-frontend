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
  meatCheckboxes = () => {
    const meatArr = this.props.allFood.filter(food => food.category === "Meat")
    return meatArr.map((meat, index) => (
      <FormControlLabel
          key={meat.id}
          label={`${meat.name} (${meat.examples})`}
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
              checkedIcon={<CheckBoxIcon fontSize="large" />}
              checked={this.props.foodChecks[meat.name]}
              value={meat.name}
              onChange={(e) => this.props.handleCheckboxClick(e)}
            />
          }
      />)
    )
  }

  render() {
    return (
      <div>
        <h1>Does it include meat?</h1>
        <h3>Choose as many protein options as needed...</h3>

        <FormGroup>
          {this.meatCheckboxes()}
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
          onClick={this.props.goToNextQuestion}>
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
