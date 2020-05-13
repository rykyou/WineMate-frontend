import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Paper, withStyles } from "@material-ui/core";
import NavBar from "../components/NavBar";
import MenuBoard from "./MenuBoard";
import StartingQuestion from "../components/StartingQuestion";
import Question from "../components/Question";
import PrepQuestion from "../components/PrepQuestion";
import ResultsPage from "../components/ResultsPage";
import QuestionStepper from "../components/QuestionStepper";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: "5vh",
  },
  paper: {
    padding: "5vh",
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "50vh",
    contain: "content",
  },
  menuboard: {
    minHeight: "50vh",
  },
});

class QuestionContainer extends Component {
  state = {
    allFood: [],
    questionNum: 1,
    questionCategory: null,
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
      Pork: false,
      Poultry: false,
      Mollusk: false,
      Fish: false,
      "Lobster & Shellfish": false,
      Kale: false,
      Lettuce: false,
      Carrots: false,
      "Squash or Pumpkin": false,
      Tomato: false,
      "Bell Pepper": false,
      Mushroom: false,
      Onion: false,
      Garlic: false,
      "Beans & Peas": false,
      "Nuts & Seeds": false,
      Pasta: false,
      Bread: false,
      Tortillas: false,
      "White Rice": false,
      "Brown Rice": false,
      Quinoa: false,
      "Sweet Potato": false,
      Potato: false,
      "Soft Cheese & Cream": false,
      "Pungent Cheese": false,
      "Hard Cheese": false,
      "Black Pepper": false,
      "Red Pepper": false,
      "Hot Sauce": false,
      Sichuan: false,
      Thyme: false,
      Oregano: false,
      Basil: false,
      Cinnamon: false,
      Turmeric: false,
      Ginger: false,
      Anise: false,
      Saffron: false,
      "Grilled or Barbecued": false,
      "Sautéed or Fried": false,
      Smoked: false,
      Roasted: false,
      "Poached or Steamed": false,
      "Fruit & Berries": false,
      "Crème Brûlée": false,
      "Ice Cream": false,
      Caramel: false,
      Chocolate: false,
      Coffee: false,
    },
  };

  componentDidMount() {
    this.getAllFood();
  }

  getAllFood = () => {
    fetch("https://winemate-api.herokuapp.com/api/v1/foods")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          allFood: data,
        });
      });
  };

  //////////  HANDLERS TO DIRECT TO CORRECT QUESTION COMPONENT ///////////

  changeQuestionNumber = (num) => {
    if (num === 1 || (this.state.questionNum === 8 && num < 8)) {
      //hitting "Back" from either "Meat" Question(2) OR "Sweets" Question(8) will direct to StartingQuestion(1)
      this.goBackToFirstQuestion();
    } else if (this.state.questionNum > 6 && num > 7) {
      //hitting "Next" button on either PrepQuestion(7) or Sweets Question(8) will direct to ResultsPage(9)
      this.setState({
        questionNum: 9,
        questionCategory: null,
      });
      this.compileWineScores();
    } else {
      this.setState({
        questionNum: num,
        questionCategory: this.categoryVariable(num),
      });

      // Scroll correct Step into view (from QuestionStepper) if screen width is too small.
      let questionStep = document.getElementById(`question-step-${num - 2}`);
      if (questionStep) questionStep.scrollIntoView();
    }
  };

  categoryVariable = (num) => {
    const categoryObj = {
      2: "Meat",
      3: "Vegetable",
      4: "Starch",
      5: "Dairy",
      6: "Herb & Spice",
      7: "Preparation",
      8: "Sweet",
    };
    return categoryObj[num];
  };

  goBackToFirstQuestion = () => {
    let resetFoodChecks = {};
    for (const key in this.state.foodChecks) {
      resetFoodChecks[key] = false;
    }
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
      foodChecks: resetFoodChecks,
    });
  };

  questionComponentToRender() {
    if (this.state.questionNum === 1) {
      return (
        <StartingQuestion changeQuestionNumber={this.changeQuestionNumber} />
      );
    } else if (this.state.questionNum === 7) {
      return (
        <PrepQuestion
          questionNum={this.state.questionNum}
          questionCategory={this.state.questionCategory}
          allFood={this.state.allFood}
          handlePrepChange={this.handlePrepChange}
          changeQuestionNumber={this.changeQuestionNumber}
        />
      );
    } else if (this.state.questionNum === 9) {
      return (
        <ResultsPage
          allWineStyles={this.props.allWineStyles}
          finalScoresArray={this.finalScoresArray}
          goBackToFirstQuestion={this.goBackToFirstQuestion}
        />
      );
    } else {
      return (
        <Question
          questionNum={this.state.questionNum}
          questionCategory={this.state.questionCategory}
          allFood={this.state.allFood}
          foodChecks={this.state.foodChecks}
          handleCheckboxClick={this.handleCheckboxClick}
          changeQuestionNumber={this.changeQuestionNumber}
        />
      );
    }
  }
  /////////////////////////////////////////////////////////////////

  //////////////////////  HANDLING CHOSEN FOODS  /////////////////////
  handleCheckboxClick = (event) => {
    this.setState({
      foodChecks: {
        ...this.state.foodChecks,
        [event.target.value]: event.target.checked,
      },
    });
  };

  handlePrepChange = (prepName) => {
    let foodChecksCopy = { ...this.state.foodChecks };
    foodChecksCopy["Grilled or Barbecued"] = false;
    foodChecksCopy["Sautéed or Fried"] = false;
    foodChecksCopy["Smoked"] = false;
    foodChecksCopy["Roasted"] = false;
    foodChecksCopy["Poached or Steamed"] = false;

    this.setState({
      foodChecks: {
        ...foodChecksCopy,
        [prepName]: true,
      },
    });
  };

  handleMenuItemClick = (num) => {
    this.setState({
      questionNum: num,
      questionCategory: this.categoryVariable(num),
    });
  };

  handleRemoveFoodFromMenu = (foodName) => {
    this.setState({
      foodChecks: {
        ...this.state.foodChecks,
        [foodName]: false,
      },
    });
  };

  chosenFoodNames = () => {
    let foodNames = [];
    for (const key in this.state.foodChecks) {
      if (this.state.foodChecks[key]) {
        foodNames.push(key);
      }
    }
    return foodNames;
  };

  chosenFoodObjects = () => {
    let chosenFoodObjects = [];
    this.chosenFoodNames().forEach((foodName) => {
      chosenFoodObjects.push(
        this.state.allFood.find((food) => food.name === foodName)
      );
    });
    return chosenFoodObjects;
  };
  ////////////////////////////////////////////////////////////

  ////////////////////  COMPILING WINE SCORES  /////////////////////
  compileWineScores = () => {
    let updatedBoldRedScore = this.state.boldRedScore;
    let updatedMediumRedScore = this.state.mediumRedScore;
    let updatedLightRedScore = this.state.lightRedScore;
    let updatedRoseScore = this.state.roseScore;
    let updatedRichWhiteScore = this.state.richWhiteScore;
    let updatedLightWhiteScore = this.state.lightWhiteScore;
    let updatedSparklingScore = this.state.sparklingScore;
    let updatedSweetWhiteScore = this.state.sweetWhiteScore;
    let updatedDessertScore = this.state.dessertScore;

    this.chosenFoodObjects().forEach((food) => {
      updatedBoldRedScore += food.matches[0].match_score;
      updatedMediumRedScore += food.matches[1].match_score;
      updatedLightRedScore += food.matches[2].match_score;
      updatedRoseScore += food.matches[3].match_score;
      updatedRichWhiteScore += food.matches[4].match_score;
      updatedLightWhiteScore += food.matches[5].match_score;
      updatedSparklingScore += food.matches[6].match_score;
      updatedSweetWhiteScore += food.matches[7].match_score;
      updatedDessertScore += food.matches[8].match_score;
    });

    this.setState({
      boldRedScore: updatedBoldRedScore,
      mediumRedScore: updatedMediumRedScore,
      lightRedScore: updatedLightRedScore,
      roseScore: updatedRoseScore,
      richWhiteScore: updatedRichWhiteScore,
      lightWhiteScore: updatedLightWhiteScore,
      sparklingScore: updatedSparklingScore,
      sweetWhiteScore: updatedSweetWhiteScore,
      dessertScore: updatedDessertScore,
    });
  };

  finalScoresArray = () => {
    return [
      { wine_id: 1, finalScore: this.state.boldRedScore },
      { wine_id: 2, finalScore: this.state.mediumRedScore },
      { wine_id: 3, finalScore: this.state.lightRedScore },
      { wine_id: 4, finalScore: this.state.roseScore },
      { wine_id: 5, finalScore: this.state.richWhiteScore },
      { wine_id: 6, finalScore: this.state.lightWhiteScore },
      { wine_id: 7, finalScore: this.state.sparklingScore },
      { wine_id: 8, finalScore: this.state.sweetWhiteScore },
      { wine_id: 9, finalScore: this.state.dessertScore },
    ];
  };
  ///////////////////////////////////////////////////////////////

  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar handleClickDialog={this.props.handleClickDialog} />
        <Grid className={classes.root}>
          <Grid
            container
            spacing={24}
            alignItems="center"
            justify="center"
            style={{ minHeight: "70vh" }}
          >
            <Grid item xs={12} sm={12} md={5}>
              <Paper className={classes.menuboard}>
                <MenuBoard
                  chosenFoodObjects={this.chosenFoodObjects}
                  handleRemoveFoodFromMenu={this.handleRemoveFoodFromMenu}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <Paper className={classes.paper}>
                {this.state.questionNum > 1 && this.state.questionNum < 8 ? (
                  <QuestionStepper
                    questionNum={this.state.questionNum}
                    handleMenuItemClick={this.handleMenuItemClick}
                  />
                ) : null}
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
