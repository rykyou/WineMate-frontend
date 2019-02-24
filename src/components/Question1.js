import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import '../index.css';


class Question1 extends Component {
  render() {
    return (
      <div>
        <h1>Question1</h1>
        <h3>What are you eating today?</h3>

        <Button onClick={this.props.skipToDessertQuestion} variant="contained" color="secondary" className="button-margin">
          Something Sweet
        </Button>
        <div className="divider"/>
        <Button onClick={this.props.goToNextQuestion} variant="contained" color="secondary" className="button-margin">
          Something Savory
        </Button>
      </div>
    )
  }
}

export default Question1;
