import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

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
    height: '10vh'
  },
  formMiddle: {
    height: '40vh',
  },
  button: {
    margin: '2vh',
    minHeight: '8vh',
    minWidth: '12vh'
  },
});

class Question7 extends Component {
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
            onClick={this.props.goToPreviousQuestion}>
              Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.props.goToResultsPage}>
              Find My Pairing!
          </Button>
        </Grid>
      </div>
    )
  }
}

Question7.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question7);
