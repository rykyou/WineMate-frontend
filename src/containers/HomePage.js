import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import wine from '../images/wineeee.jpeg';
import WineStylesList from './WineStylesList';
import Button from '@material-ui/core/Button';



class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <img src={wine} alt="wine"/>

        <Button variant="contained" color="secondary" component={Link} to="/questionnaire">
          Find Your Pairing!
        </Button>

        <WineStylesList allWineStyles={this.props.allWineStyles}/>
      </div>
    )
  }
}

export default HomePage;
