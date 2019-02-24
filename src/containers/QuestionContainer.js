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
    allFood: [],
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

  componentDidMount() {
    this.getAllFood()
  }

  getAllFood = () => {
    fetch('http://localhost:3000/api/v1/foods')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allFood: data
      })
    })
  }

  goToNextQuestion = () => {
    this.setState({
      questionNum: this.state.questionNum + 1
    })
  }

  goToPreviousQuestion = () => {
    this.setState({
      questionNum: this.state.questionNum - 1
    })
  }

  skipToDessertQuestion = () => {
    this.setState({
      questionNum: 8
    })
  }

  updateWineScores = () => {
    
  }

  questionComponentToRender() {
    switch(this.state.questionNum) {
      case 1:
        return <Question1
          skipToDessertQuestion={this.skipToDessertQuestion}
          goToNextQuestion={this.goToNextQuestion}
          />
      case 2:
        return <Question2
          allFood={this.state.allFood}
          goToNextQuestion={this.goToNextQuestion}
          goToPreviousQuestion={this.goToPreviousQuestion}
          updateWineScores={this.updateWineScores}
          />
      case 3:
        return <Question3
          goToNextQuestion={this.goToNextQuestion}
          goToPreviousQuestion={this.goToPreviousQuestion}
          />
      case 4:
        return <Question4
          goToNextQuestion={this.goToNextQuestion}
          goToPreviousQuestion={this.goToPreviousQuestion}
          />
      case 5:
        return <Question5
          goToNextQuestion={this.goToNextQuestion}
          goToPreviousQuestion={this.goToPreviousQuestion}
          />
      case 6:
        return <Question6
          goToNextQuestion={this.goToNextQuestion}
          goToPreviousQuestion={this.goToPreviousQuestion}
          />
      case 7:
        return <Question7
          goToNextQuestion={this.goToNextQuestion}
          goToPreviousQuestion={this.goToPreviousQuestion}
          />
      case 8:
        return <Question8
          goToPreviousQuestion={this.goToPreviousQuestion}
          />
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
