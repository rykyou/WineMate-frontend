import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput,
  Select, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: '10%',
    width: '90%',
  },
  formTop: {
    height: '5vh'
  },
  formMiddle: {
    height: '45vh',
  },
  button: {
    margin: '2vh',
    minHeight: '8vh',
    minWidth: '12vh'
  },
});

class PrepQuestion extends Component {
  state = {
    prepMethod: '',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.handlePrepChange(event.target.value);
  };

  prepMenuItems = () => {
    const prepArr = this.props.allFood.filter(food => food.category === "Preparation")
    return prepArr.map(prep => <MenuItem key={prep.id} value={prep.name}>{prep.name}</MenuItem>)
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid className={classes.formTop}>
          <h1>How will this be prepared?</h1>
        </Grid>
        <Grid className={classes.formMiddle}>
          <form className={classes.root} autoComplete="off">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef = ref;
                }}
                htmlFor="outlined-prep-simple"
              >
                Prep Method
              </InputLabel>
              <Select
                value={this.state.prepMethod}
                onChange={this.handleChange}
                input={
                  <OutlinedInput
                    labelWidth={this.state.labelWidth}
                    name="prepMethod"
                    id="outlined-prep-simple"
                  />
                }
              >
                {this.prepMenuItems()}
              </Select>
            </FormControl>
          </form>
        </Grid>
        <Grid container justify="space-between">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.props.changeQuestionNumber(6)}>
              Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.props.changeQuestionNumber(this.props.questionNum + 1)}>
              Find My Pairing!
          </Button>
        </Grid>
      </div>
    )
  }
}

PrepQuestion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrepQuestion);
