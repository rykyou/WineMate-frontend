import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AnimatedSlider from '../components/AnimatedSlider';
import WineStylesNavigation from './WineStylesNavigation';
import HomeNavBar from '../components/HomeNavBar';

const styles = theme => ({
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
    text: {
      color: theme.palette.secondary.main,
      textAlign: 'center',
      textSize: '20vh',
      fontFamily: 'Sriracha'
    }
});


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
        <h1 className={classes.text}>Explore by Wine Style</h1>
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
