import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import WineStylesList from './WineStylesList';
import Button from '@material-ui/core/Button';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner />

        <Button variant="contained" color="secondary" component={Link} to="/questionnaire">
          Find Your Pairing!
        </Button>

        <WineStylesList allWineStyles={this.props.allWineStyles}/>
      </div>
    )
  }
}

export default HomePage;
