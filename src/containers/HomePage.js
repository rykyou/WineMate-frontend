import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <Link to='/questionnaire'>
          <RaisedButton label="Find Your Pairing!" secondary={true} style={{margin:12}} />
        </Link>
      </div>
    )
  }
}

export default HomePage;
