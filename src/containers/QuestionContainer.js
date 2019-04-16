import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, withStyles } from '@material-ui/core';
import NavBar from '../components/NavBar';
import MenuBoard from './MenuBoard';
import Question1 from '../components/Question1';
import Question2 from '../components/Question2';
import Question3 from '../components/Question3';
import Question4 from '../components/Question4';
import Question5 from '../components/Question5';
import Question6 from '../components/Question6';
import Question7 from '../components/Question7';
import Question8 from '../components/Question8';
import ResultsPage from '../components/ResultsPage';
import QuestionStepper from '../components/QuestionStepper';
import background from '../images/question-background2.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '5vh'
  },
  paper: {
    padding: '5vh',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '75vh'
  },
  menuboard: {
    minHeight: '50vh'
  },
  backgroundImage: {
    backgroundImage: 'url(' + background + ')',
    backgroundSize: 'cover',
    backgroundPosition: '100%',
    height: '100%',
    overflow: 'hidden',
  }
});

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
    dessertScore: 0,
    foodChecks: {
      "Red Meat": false,
      "Cured Meat": false,
      "Pork": false,
      "Poultry": false,
      "Mollusk": false,
      "Fish": false,
      "Lobster & Shellfish": false,
      "Kale": false,
      "Lettuce": false,
      "Carrots": false,
      "Squash or Pumpkin": false,
      "Tomato": false,
      "Bell Pepper": false,
      "Mushroom": false,
      "Onion": false,
      "Garlic": false,
      "Beans & Peas": false,
      "Nuts & Seeds": false,
      "Pasta": false,
      "Bread": false,
      "Tortillas": false,
      "White Rice": false,
      "Brown Rice": false,
      "Quinoa": false,
      "Sweet Potato": false,
      "Potato": false,
      "Soft Cheese & Cream": false,
      "Pungent Cheese": false,
      "Hard Cheese": false,
      "Black Pepper": false,
      "Red Pepper": false,
      "Hot Sauce": false,
      "Sichuan": false,
      "Thyme": false,
      "Oregano": false,
      "Basil": false,
      "Cinnamon": false,
      "Turmeric": false,
      "Ginger": false,
      "Anise": false,
      "Saffron": false,
      "Grilled or Barbecued": false,
      "Sautéed or Fried": false,
      "Smoked": false,
      "Roasted": false,
      "Poached or Steamed": false,
      "Fruit & Berries": false,
      "Crème Brûlée": false,
      "Ice Cream": false,
      "Caramel": false,
      "Chocolate": false,
      "Coffee": false
    }
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


  handleCheckboxClick = (event) => {
    this.setState({
      foodChecks: {
        ...this.state.foodChecks,
        [event.target.value]: event.target.checked
      }
    });
  };

  handleRemoveFoodFromMenu = (foodName) => {
    this.setState({
      foodChecks: {
        ...this.state.foodChecks,
        [foodName]: false
      }
    });
  }

  handlePrepChange = (prepName) => {
    let foodChecksCopy = {...this.state.foodChecks}
    foodChecksCopy["Grilled or Barbecued"] = false
    foodChecksCopy["Sautéed or Fried"] = false
    foodChecksCopy["Smoked"] = false
    foodChecksCopy["Roasted"] = false
    foodChecksCopy["Poached or Steamed"] = false

    this.setState({
      foodChecks: {
        ...foodChecksCopy,
        [prepName]: true
      }
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
    let resetFoodChecks = {};
    for (const key in this.state.foodChecks) { resetFoodChecks[key] = false }
    this.setState({
      ...this.state,
      questionNum: 1,
      boldRedScore: 0,
      mediumRedScore: 0,
      lightRedScore: 0,
      roseScore: 0,
      richWhiteScore: 0,
      lightWhiteScore: 0,
      sparklingScore: 0,
      sweetWhiteScore: 0,
      dessertScore: 0,
      foodChecks: resetFoodChecks
    })
  }

  skipToDessertQuestion = () => {
    this.setState({
      questionNum: 8
    })
  }

  goToResultsPage = () => {
    this.compileWineScores()
    this.setState({
      questionNum: 9
    })
  }

  handleMenuItemClick = (num) => {
    this.setState({
      questionNum: num
    })
  }

  // chosenFoods = ["Poultry"]
  chosenFoodNames = () => {
    let foodNames = [];
    for (const key in this.state.foodChecks) {
      if (this.state.foodChecks[key]) {
        foodNames.push(key)
      }
    }
    return foodNames
  }

  chosenFoodObjects = () => {
    let chosenFoodObjects = [];
    this.chosenFoodNames().forEach(foodName => {
      chosenFoodObjects.push(this.state.allFood.find(food => food.name === foodName))
    })
    return chosenFoodObjects
  }

  compileWineScores = () => {
    let updatedBoldRedScore = this.state.boldRedScore
    let updatedMediumRedScore = this.state.mediumRedScore
    let updatedLightRedScore = this.state.lightRedScore
    let updatedRoseScore = this.state.roseScore
    let updatedRichWhiteScore = this.state.richWhiteScore
    let updatedLightWhiteScore = this.state.lightWhiteScore
    let updatedSparklingScore = this.state.sparklingScore
    let updatedSweetWhiteScore = this.state.sweetWhiteScore
    let updatedDessertScore = this.state.dessertScore

    this.chosenFoodObjects().forEach(food => {
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

  finalScoresArray = () => {
    let finalScoresArr = [];
    const boldRedScore = this.state.boldRedScore;
    finalScoresArr.push({wine_id: 1, finalScore: boldRedScore})
    const mediumRedScore = this.state.mediumRedScore;
    finalScoresArr.push({wine_id: 2, finalScore: mediumRedScore})
    const lightRedScore = this.state.lightRedScore;
    finalScoresArr.push({wine_id: 3, finalScore: lightRedScore})
    const roseScore = this.state.roseScore;
    finalScoresArr.push({wine_id: 4, finalScore: roseScore})
    const richWhiteScore = this.state.richWhiteScore;
    finalScoresArr.push({wine_id: 5, finalScore: richWhiteScore})
    const lightWhiteScore = this.state.lightWhiteScore;
    finalScoresArr.push({wine_id: 6, finalScore: lightWhiteScore})
    const sparklingScore = this.state.sparklingScore;
    finalScoresArr.push({wine_id: 7, finalScore: sparklingScore})
    const sweetWhiteScore = this.state.sweetWhiteScore;
    finalScoresArr.push({wine_id: 8, finalScore: sweetWhiteScore})
    const dessertScore = this.state.dessertScore;
    finalScoresArr.push({wine_id: 9, finalScore: dessertScore})
    return finalScoresArr
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
          foodChecks={this.state.foodChecks}
          handleCheckboxClick={this.handleCheckboxClick}
          goBackToFirstQuestion={this.goBackToFirstQuestion}
          goToNextQuestion={this.goToNextQuestion}
          />
      case 3:
        return <Question3
          allFood={this.state.allFood}
          foodChecks={this.state.foodChecks}
          handleCheckboxClick={this.handleCheckboxClick}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToNextQuestion={this.goToNextQuestion}
          />
      case 4:
        return <Question4
          allFood={this.state.allFood}
          foodChecks={this.state.foodChecks}
          handleCheckboxClick={this.handleCheckboxClick}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToNextQuestion={this.goToNextQuestion}
          />
      case 5:
        return <Question5
          allFood={this.state.allFood}
          foodChecks={this.state.foodChecks}
          handleCheckboxClick={this.handleCheckboxClick}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToNextQuestion={this.goToNextQuestion}
          />
      case 6:
        return <Question6
          allFood={this.state.allFood}
          foodChecks={this.state.foodChecks}
          handleCheckboxClick={this.handleCheckboxClick}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToNextQuestion={this.goToNextQuestion}
          />
      case 7:
        return <Question7
          allFood={this.state.allFood}
          handlePrepChange={this.handlePrepChange}
          goToPreviousQuestion={this.goToPreviousQuestion}
          goToResultsPage={this.goToResultsPage}
          />
      case 8:
        return <Question8
          allFood={this.state.allFood}
          foodChecks={this.state.foodChecks}
          handleCheckboxClick={this.handleCheckboxClick}
          goBackToFirstQuestion={this.goBackToFirstQuestion}
          goToResultsPage={this.goToResultsPage}
          />
      case 9:
        return <ResultsPage
          allWineStyles={this.props.allWineStyles}
          finalScoresArray={this.finalScoresArray}
          goBackToFirstQuestion={this.goBackToFirstQuestion}
          />
      default:
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.backgroundImage}>
        <NavBar handleClickDialog={this.props.handleClickDialog}/>
        <Grid className={classes.root}>
          <Grid container
            spacing={24}
            alignItems="center"
            justify="center"
            style={{ minHeight: '70vh' }}
          >
            <Grid item sm={12} md={5}>
              <Paper className={classes.menuboard}>
                <MenuBoard
                  chosenFoodObjects={this.chosenFoodObjects}
                  handleRemoveFoodFromMenu={this.handleRemoveFoodFromMenu}
                />
              </Paper>
            </Grid>
            <Grid item sm={12} md={7}>
              <Paper className={classes.paper}>
                {this.state.questionNum > 1 && this.state.questionNum < 8 ?
                  <QuestionStepper
                    questionNum={this.state.questionNum}
                    handleMenuItemClick={this.handleMenuItemClick}
                  />
                :
                  null
                }
                {this.questionComponentToRender()}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuestionContainer);
