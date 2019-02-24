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

  goBackToFirstQuestion = () => {
    this.setState({
      questionNum: 1
    })
  }

  skipToDessertQuestion = () => {
    this.setState({
      questionNum: 8
    })
  }

  goToResultsPage = () => {

  }

  updateWineScores = (chosenFoodArr) => {
    let foodArr = [];
    chosenFoodArr.forEach(foodName => {
      foodArr.push(this.state.allFood.find(food => food.name === foodName))
    })

    let updatedBoldRedScore = this.state.boldRedScore
    let updatedMediumRedScore = this.state.mediumRedScore
    let updatedLightRedScore = this.state.lightRedScore
    let updatedRoseScore = this.state.roseScore
    let updatedRichWhiteScore = this.state.richWhiteScore
    let updatedLightWhiteScore = this.state.lightWhiteScore
    let updatedSparklingScore = this.state.sparklingScore
    let updatedSweetWhiteScore = this.state.sweetWhiteScore
    let updatedDessertScore = this.state.dessertScore

    foodArr.forEach(food => {
      updatedBoldRedScore += food.matches[0].match_score
      updatedMediumRedScore += food.matches[1].match_score
      updatedLightRedScore += food.matches[2].match_score
      updatedRoseScore += food.matches[3].match_score
      updatedRichWhiteScore += food.matches[4].match_score
      updatedLightWhiteScore += food.matches[5].match_score
      updatedSparklingScore += food.matches[6].match_score
      updatedSweetWhiteScore += food.matches[7].match_score
      updatedDessertScore += food.matches[8].match_score
    })

    this.setState({
      boldRedScore: updatedBoldRedScore,
      mediumRedScore: updatedMediumRedScore,
      lightRedScore: updatedLightRedScore,
      roseScore: updatedRoseScore,
      richWhiteScore: updatedRichWhiteScore,
      lightWhiteScore: updatedLightWhiteScore,
      sparklingScore: updatedSparklingScore,
      sweetWhiteScore: updatedSweetWhiteScore,
      dessertScore: updatedDessertScore
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
        return <Question2
          allFood={this.state.allFood}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToNextQuestion={this.goToNextQuestion}
          updateWineScores={this.updateWineScores}
          />
      case 3:
        return <Question3
          allFood={this.state.allFood}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToNextQuestion={this.goToNextQuestion}
          updateWineScores={this.updateWineScores}
          />
      case 4:
        return <Question4
          allFood={this.state.allFood}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToNextQuestion={this.goToNextQuestion}
          updateWineScores={this.updateWineScores}
          />
      case 5:
        return <Question5
          allFood={this.state.allFood}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToNextQuestion={this.goToNextQuestion}
          updateWineScores={this.updateWineScores}
          />
      case 6:
        return <Question6
          allFood={this.state.allFood}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToNextQuestion={this.goToNextQuestion}
          updateWineScores={this.updateWineScores}
          />
      case 7:
        return <Question7
          allFood={this.state.allFood}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToResultsPage={this.goToResultsPage}
          updateWineScores={this.updateWineScores}
          />
      case 8:
        return <Question8
          allFood={this.state.allFood}
          goBackToFirstQuestion={this.goBackToFirstQuestion}
          goToResultsPage={this.goToResultsPage}
          updateWineScores={this.updateWineScores}
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
