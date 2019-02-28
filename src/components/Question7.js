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

    return prepArr.map((prep, index) => (
        <Button
          key={prep.id}
          variant="contained"
          color="secondary"
          className="button-margin"
          onClick={() => this.props.handlePrepButtonClick(prep.name)}>
            {prep.name}
        </Button>
    ))
  }

  render() {
    return (
      <div>
        <h1>How will this be prepared?</h1>

        {this.prepButtons()}

        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.goToResultsPage}>
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


        // <Button
        //   variant="contained"
        //   color="primary"
        //   onClick={this.props.goToPreviousQuestion}>
        //     Back
        // </Button>
