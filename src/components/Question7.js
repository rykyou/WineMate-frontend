import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../index.css';


const styles = {
  checked: {},
};

class Question7 extends Component {

  handlePrepButtonClick = (prepName) => {
    this.props.goToNextQuestion();
    this.props.updateWineScores([prepName]);
  }

  prepButtons = () => {
    const prepArr = this.props.allFood.filter(food => food.category === "Preparation")

    let prepButtons = prepArr.map((prep, index) => (
      <Button
        key={prep.id}
        variant="contained"
        color="secondary"
        className="button-margin"
        onClick={() => this.handlePrepButtonClick(prep.name)}>
          {prep.name}
      </Button>
    ))

    return prepButtons
  }

  render() {
    return (
      <div>
        <h1>Question7</h1>
        <h3>How will this be prepared?</h3>

        {this.prepButtons()}

        <Button
          variant="contained"
          color="primary"
          onClick={this.props.goToPreviousQuestion}>
            Back
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={this.goToResultsPage}>
            Find My Pairing!
        </Button>

      </div>
    )
  }
}

Question7.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question7);
// export default Question7;
