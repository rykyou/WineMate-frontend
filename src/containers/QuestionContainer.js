import React, { Component } from 'react';

import Question1 from '../components/Question1';
import Question2 from '../components/Question2';
import Question3 from '../components/Question3';
import Question4 from '../components/Question4';
import Question5 from '../components/Question5';
import Question6 from '../components/Question6';
import Question7 from '../components/Question7';
import Question8 from '../components/Question8';


class QuestionContainer extends Component {
  state = {
    questionNum: 1,
    boldRedScore: 0,
    mediumRedScore: 0,
    lightRedScore: 0,
    roseScore: 0,
    richWhiteScore: 0,
    lightWhiteScore: 0,
    sparklingScore: 0,
    sweetWhiteScore: 0,
    dessertScore: 0
  }

  goToNextQuestion = () => {
    this.setState({
      questionNum: this.state.questionNum + 1
    })
  }

  skipToDessertQuestion = () => {
    this.setState({
      questionNum: 8
    })
  }

  questionComponentToRender() {
    switch(this.state.questionNum) {
      case 1:
        return <Question1
          skipToDessertQuestion={this.skipToDessertQuestion}
          goToNextQuestion={this.goToNextQuestion}
          />
      case 2:
        return <Question2 />
      case 3:
        return <Question3 />
      case 4:
        return <Question4 />
      case 5:
        return <Question5 />
      case 6:
        return <Question6 />
      case 7:
        return <Question7 />
      case 8:
        return <Question8 />
      default:
    }
  }

  render() {
    return (
      <div>
        {this.questionComponentToRender()}
      </div>
    );
  }
}

export default QuestionContainer;
