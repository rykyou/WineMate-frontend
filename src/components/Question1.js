import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class Question1 extends Component {
  render() {
    return (
      <div>
        <h1>Question1</h1>
        <h3>What are you eating today?</h3>
        <RaisedButton
          label="Something Sweet"
          style={{margin: 50}}
          onClick={this.props.skipToDessertQuestion}
        />
        <RaisedButton
          label="Something Savory"
          style={{margin: 50}}
          onClick={this.props.goToNextQuestion}
        />
      </div>
    )
  }
}

export default Question1;
