import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
    height: '25vh',
    width: '25vh'
  },
  formTop: {
    height: '10vh'
  },
  formMiddle: {
    height: '25vh',
    marginTop: '10vh'
  }
});

class StartingQuestion extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid className={classes.formTop}>
          <h1>What are you eating today?</h1>
        </Grid>
        <Grid container spacing={16} className={classes.formMiddle}>
          <Grid item md={12} lg={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => this.props.changeQuestionNumber(8)}>
                Something Sweet <br/>
                (This will be a short one!)
            </Button>
          </Grid>
          <Grid item md={12} lg={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => this.props.changeQuestionNumber(2)}>
                Something Savory
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

StartingQuestion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StartingQuestion);
