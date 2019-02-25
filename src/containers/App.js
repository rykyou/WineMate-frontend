import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import '../App.css';

import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import QuestionContainer from './QuestionContainer';
import WineShowPage from './WineShowPage';



class App extends Component {
  state = {
    allWineStyles: [],
    selectedWineStyle: null
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

  render() {
    return (
      <div>
        <NavBar />

        <Route exact path="/" render={() => {return (<HomePage
            allWineStyles={this.state.allWineStyles}
          />)}}
        />

        <Route exact path="/questionnaire" render={() => {return (<QuestionContainer
            allWineStyles={this.state.allWineStyles}
          />)}}
        />

        <Route exact path='/winestyle/:winestyleId' render={(props) => {
          const winestyleIdInUrl = parseInt(props.match.params.winestyleId)
          const chosenWineStyleObj = this.state.allWineStyles.find(winestyleObj => winestyleObj.id === winestyleIdInUrl )
          return (<WineShowPage
            chosenWineStyleObj={chosenWineStyleObj}
              />)
          }}
        />

      </div>
    );
  }
}

export default App;
