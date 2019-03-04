import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import WineStylesList from './WineStylesList';
import Button from '@material-ui/core/Button';
import AnimatedSlider from '../components/AnimatedSlider';
import WineStylesNavigation from './WineStylesNavigation';
import HomeNavBar from '../components/HomeNavBar';
// import Typography from '@material-ui/core/Typography';

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
    const { classes } = this.props;
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


// html {
//   /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/work.jpeg') no-repeat center center fixed;  */
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   height: 100%;
//   background: lightgrey;
// }
