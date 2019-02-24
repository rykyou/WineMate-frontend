import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';



class Question6 extends Component {
  render() {
    return (
      <div>
        <h1>Question6</h1>
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

export default Question6;
