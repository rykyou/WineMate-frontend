import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
    minHeight: '25vh',
    minWidth: '25vh'
  },
  formTop: {
    height: '10vh'
  },
  formMiddle: {
    height: '30vh',
    marginTop: '5vh'
  }
});

class Question1 extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid className={classes.formTop}>
          <h1>What are you eating today?</h1>
        </Grid>
        <Grid container className={classes.formMiddle}>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.props.skipToDessertQuestion}>
                Something Sweet <br/>
                (This will be a short one!)
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.props.goToNextQuestion}>
                Something Savory
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Question1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question1);
