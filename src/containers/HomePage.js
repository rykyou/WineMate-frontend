import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, withStyles } from "@material-ui/core";
import AnimatedSlider from "../components/AnimatedSlider";
import WineStylesNavigation from "./WineStylesNavigation";
import HomeNavBar from "../components/HomeNavBar";

const styles = theme => ({
  button: {
    width: "250px",
    height: "150px",
    marginLeft: "1350px"
  },
  empty: {
    height: "300px"
  },
  smallEmpty: {
    height: "100px"
  },
  text: {
    color: theme.palette.secondary.main,
    textAlign: "center",
    marginTop: "25px",
    marginBottom: "0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px"
    }
  },
  navigation: {
    padding: "2%"
  }
});

class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <HomeNavBar handleClickDialog={this.props.handleClickDialog} />
        <AnimatedSlider
          handleClickDialog={this.props.handleClickDialog}
          wineStyleToGoTo={this.props.wineStyleToGoTo}
        />
        <h1 className={classes.text}>Explore by Wine Style</h1>
        <Grid container className={classes.navigation}>
          <WineStylesNavigation
            allWineStyles={this.props.allWineStyles}
            handleSelectWineStyle={this.props.handleSelectWineStyle}
            selectedWineStyle={this.props.selectedWineStyle}
          />
        </Grid>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);
