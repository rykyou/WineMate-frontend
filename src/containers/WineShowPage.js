import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Paper, Typography, withStyles } from "@material-ui/core";
import NavBar from "../components/NavBar";
import WineStylesNavigation from "./WineStylesNavigation";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minHeight: "20vh"
  },
  wholePage: {
    margin: "2%"
  },
  descriptionContainer: {
    margin: "2% 8%"
  },
  navigation: {
    marginTop: "3vh"
  },
  h1: {
    marginTop: "5vh",
    fontFamily: "Sriracha, cursive",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px"
    }
  },
  h2: {
    marginTop: "3vh",
    fontFamily: "Sriracha, cursive",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px"
    }
  },
  text: {
    textAlign: "center",
    margin: "5vh",
    fontSize: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      margin: "1vh"
    },
    [theme.breakpoints.between("xs, sm")]: {
      fontSize: "18px",
      margin: "1vh"
    }
  },
  rightBottomPaper: {
    ...theme.mixins.gutters(),
    marginTop: "2vh",
    minHeight: "15vh",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  bottomGrid: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 0,
      maxWidth: "100%",
      flexBasis: "100%"
    }
  },
  martiniIcon: {
    maxWidth: "5vh"
  }
});

class WineShowPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar
          chosenWineStyleObj={this.props.chosenWineStyleObj}
          handleClickDialog={this.props.handleClickDialog}
        />
        {this.props.chosenWineStyleObj ? (
          <Grid className={classes.wholePage}>
            <Grid
              container
              spacing={0}
              alignItems="center"
              justify="center"
              style={{ minHeight: "70vh" }}
            >
              <Grid container className={classes.navigation}>
                <WineStylesNavigation
                  allWineStyles={this.props.allWineStyles}
                  handleSelectWineStyle={this.props.handleSelectWineStyle}
                  selectedWineStyle={this.props.selectedWineStyle}
                />
              </Grid>
              <h1 className={classes.h1}>
                {this.props.chosenWineStyleObj.name}
              </h1>
              <Grid
                className={classes.descriptionContainer}
                container
                spacing={24}
              >
                <Grid item sm={12}>
                  <Paper className={classes.root} elevation={1}>
                    <Typography
                      className={classes.text}
                      variant="h5"
                      component="h5"
                    >
                      {this.props.chosenWineStyleObj.description}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item sm={12} md={6}>
                  <Paper className={classes.root} elevation={1}>
                    <Typography
                      className={classes.h2}
                      variant="h5"
                      component="h5"
                    >
                      Food Pairing Affinities
                    </Typography>
                    <Typography
                      className={classes.text}
                      variant="h6"
                      component="h6"
                    >
                      {this.props.chosenWineStyleObj.cuisine_title}
                    </Typography>
                    <Typography
                      className={classes.text}
                      variant="h6"
                      component="h6"
                    >
                      Like...{" "}
                      {this.props.chosenWineStyleObj.cuisine_description}
                    </Typography>
                  </Paper>
                  <Paper className={classes.rightBottomPaper} elevation={1}>
                    <Typography
                      className={classes.h2}
                      variant="h5"
                      component="h5"
                    >
                      Serving Temperature
                    </Typography>
                    <Typography
                      className={classes.text}
                      variant="h6"
                      component="h6"
                    >
                      {this.props.chosenWineStyleObj.serving_temp}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item sm={12} md={6} className={classes.bottomGrid}>
                  <Paper className={classes.root} elevation={1}>
                    <Typography
                      className={classes.h2}
                      variant="h5"
                      component="h5"
                    >
                      Examples
                    </Typography>
                    {this.props.chosenWineStyleObj.wines.map(wine => (
                      <Typography
                        className={classes.text}
                        variant="h6"
                        key={wine.name}
                      >
                        {wine.name}
                      </Typography>
                    ))}
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : null}
      </div>
    );
  }
}

WineShowPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WineShowPage);
