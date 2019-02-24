import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../index.css';


class Question1 extends Component {
  render() {
    return (
      <div>
        <h1>Question1</h1>
        <h3>What are you eating today?</h3>

        <Button
          variant="contained"
          color="secondary"
          className="button-margin"
          onClick={this.props.skipToDessertQuestion}>
            Something Sweet
        </Button>
        <div className="divider"/>
        <Button
          variant="contained"
          color="secondary"
          className="button-margin"
          onClick={this.props.goToNextQuestion}>
            Something Savory
        </Button>
      </div>
    )
  }
}

export default Question1;
