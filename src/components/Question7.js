import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = {
  checked: {},
};

class Question7 extends Component {
  prepButtons = () => {
    const prepArr = this.props.allFood.filter(food => food.category === "Preparation")
    let prepButtons = prepArr.map((prep, index) => (
      <div>
        <Button
          key={prep.id}
          variant="contained"
          color="secondary"
          className="button-margin"
          onClick={() => this.handlePrepButtonClick(prep.name)}>
            {prep.name}
        </Button>
      </div>
    ))

    return prepButtons
  }

  render() {
    return (
      <div>
        <h1>How will this be prepared?</h1>

        {this.prepButtons()}

      </div>
    )
  }
}

Question7.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question7);
