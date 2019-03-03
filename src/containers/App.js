import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import InfographicDialog from '../components/InfographicDialog';
import HomePage from './HomePage';
import QuestionContainer from './QuestionContainer';
import WineShowPage from './WineShowPage';



class App extends Component {
  state = {
    allWineStyles: [],
    openDialogState: false
  }

  componentDidMount() {
    this.getAllWineStyles()
  }

  getAllWineStyles = () => {
    fetch('http://localhost:3000/api/v1/wine_styles')
    .then(res => res.json())
    .then(data => {
      this.setState({
        allWineStyles: data
      })
    })
  }

  handleClickDialog = () => {
    this.setState({ openDialogState: !this.state.openDialogState });
  };

  render() {
    return (
      <div>
        <NavBar handleClickDialog={this.handleClickDialog}/>
        <InfographicDialog
          openDialogState={this.state.openDialogState}
          handleClickDialog={this.handleClickDialog}
        />

        <Route exact path="/" render={() => {
          return (<HomePage
            allWineStyles={this.state.allWineStyles}
            handleClickDialog={this.handleClickDialog}
          />)}}
        />

        <Route exact path="/questionnaire" render={() => {
          return (<QuestionContainer
            allWineStyles={this.state.allWineStyles}
          />)}}
        />

        <Route exact path='/winestyles/:slug' render={(props) => {
          let wineStyleSlugInUrl = props.match.params.slug
          let chosenWineStyleObj = this.state.allWineStyles.find(winestyleObj => winestyleObj.slug === wineStyleSlugInUrl )
          return (<WineShowPage
            chosenWineStyleObj={chosenWineStyleObj}
          />)}}
        />

      </div>
    );
  }
}

export default App;
