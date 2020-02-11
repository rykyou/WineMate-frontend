import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "scroll"
  },
  button: {
    marginRight: theme.spacing.unit
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

function getSteps() {
  return ["Meat", "Veggies", "Starch", "Dairy", "Herbs", "Prep"];
}

class QuestionStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleStepClick = step => () => {
    this.props.handleMenuItemClick(step + 2);
    this.setState({
      activeStep: step
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();

    return (
      <div className={classes.root}>
        <Stepper
          alternativeLabel
          nonLinear
          activeStep={this.props.questionNum - 2}
        >
          {steps.map((label, index) => {
            const props = {};
            const buttonProps = {};
            return (
              // Give each Step component id of i.e. "question-step-2" so that
              // we can scrollIntoView when screen width is too small to show
              // full entire QuestionStepper.
              <Step key={label} {...props} id={"question-step-" + index}>
                <StepButton
                  onClick={this.handleStepClick(index)}
                  {...buttonProps}
                >
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
      </div>
    );
  }
}

QuestionStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(QuestionStepper);
