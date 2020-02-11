import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Grid, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: "20px",
    height: "250px",
    width: "250px",
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing.unit,
      height: "200px",
      width: "200px"
    }
  },
  formMiddle: {
    marginTop: "80px",
    margin: "auto",
    maxWidth: "fit-content",
    [theme.breakpoints.down("md")]: {
      display: "block",
      marginTop: "0"
    }
  }
});

class StartingQuestion extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid>
          <h2>What are you eating today?</h2>
        </Grid>
        <Grid container className={classes.formMiddle}>
          <Grid item sm={12} md={6} lg={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => this.props.changeQuestionNumber(8)}
            >
              Something Sweet <br />
              (This will be a short one!)
            </Button>
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => this.props.changeQuestionNumber(2)}
            >
              Something Savory
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

StartingQuestion.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StartingQuestion);
