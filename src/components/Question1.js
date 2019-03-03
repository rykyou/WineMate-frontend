import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../index.css';


class Question1 extends Component {
  render() {
    return (
      <div>
        <h1>What are you eating today?</h1>
        <Button
          variant="contained"
          color="primary"
          className="button-margin"
          onClick={this.props.skipToDessertQuestion}>
            Something Sweet <br/>
            (This will be a short one!)
        </Button>
        <div className="divider"/>
        <Button
          variant="contained"
          color="primary"
          className="button-margin"
          onClick={this.props.goToNextQuestion}>
            Something Savory
        </Button>
      </div>
    )
  }
}

export default Question1;
