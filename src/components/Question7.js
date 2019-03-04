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

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 1000,
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
        <h1>How will this be prepared?</h1>

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
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.prepMenuItems()}
            </Select>
          </FormControl>
        </form>

        <Button
          variant="contained"
          color="secondary"
          onClick={this.props.goToPreviousQuestion}>
            Back
        </Button>
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
