import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import '../App.css';

import NavBar from '../components/NavBar';
import HomePage from './HomePage';
import QuestionContainer from './QuestionContainer';
import ResultsPage from './ResultsPage';



class App extends Component {
  state = {
    allWineStyles: [],
    selectedWineStyle: null
  }

  render() {
    return (
      <div>
        <NavBar />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/questionnaire" component={QuestionContainer} />
        <Route exact path="/results" component={ResultsPage} />

      </div>
    );
  }
}

export default App;
