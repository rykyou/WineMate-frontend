import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AnimatedSlider from '../components/AnimatedSlider';
import WineStylesNavigation from './WineStylesNavigation';
import HomeNavBar from '../components/HomeNavBar';

const styles = {
    button: {
      width: "250px",
      height: "150px",
      marginLeft: "1350px",
    },
    empty: {
      height: "300px"
    },
    smallEmpty: {
      height: "100px"
    },
};


class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeNavBar handleClickDialog={this.props.handleClickDialog}/>
        <AnimatedSlider
          handleClickDialog={this.props.handleClickDialog}
          wineStyleToGoTo={this.props.wineStyleToGoTo}
        />
        <h2>Explore by Wine Style!</h2>
        <WineStylesNavigation
          allWineStyles={this.props.allWineStyles}
          handleSelectWineStyle={this.props.handleSelectWineStyle}
          selectedWineStyle={this.props.selectedWineStyle}
        />
      </div>
    )
  }
}


HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
