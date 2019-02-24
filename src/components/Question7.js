import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';



class Question7 extends Component {
  render() {
    return (
      <div>
        <h1>Question7</h1>
        <RaisedButton
          label="Back"
          style={{margin: 50}}
          onClick={this.props.goToPreviousQuestion}
        />
        <RaisedButton
          label="Next"
          style={{margin: 50}}
          onClick={this.props.goToNextQuestion}
        />
      </div>
    )
  }
}

export default Question7;
