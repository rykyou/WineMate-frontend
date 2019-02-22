import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import wine from '../images/wineeee.jpeg';

import RaisedButton from 'material-ui/RaisedButton';



class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <img src={wine} alt="wine"/>
        <Link to='/questionnaire'>
          <RaisedButton label="Find Your Pairing!" secondary={true} style={{margin:50}} />
        </Link>
      </div>
    )
  }
}

export default HomePage;
