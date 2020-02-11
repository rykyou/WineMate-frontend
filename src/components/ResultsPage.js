import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  CircularProgress,
  Fade,
  Grid,
  Typography,
  withStyles
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  progress: {
    marginTop: "10vh"
  },
  formTop: {
    marginLeft: "-20px",
    marginRight: "-20px"
  },
  formMiddle: {
    marginTop: "2vh",
    paddingBottom: "5vh",
    margin: "-20px"
  },
  newPairingButton: {
    height: "8vh",
    width: "18vh"
  },
  wineImage: {
    marginTop: "1vh",
    height: "25vh"
  },
  h2: {
    color: theme.palette.primary.main
  },
  errorMessage: {
    margin: "100px auto 100px auto",
    [theme.breakpoints.down("md")]: {
      margin: "50px auto 50px auto"
    }
  }
});

class ResultsPage extends Component {
  state = {
    query: "progress"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        query: "success"
      });
    }, 2000);
  }

  wineWithHighestScore = () => {
    let highestScore = 0;
    let highestScoreWineId = 0;
    this.props.finalScoresArray().forEach(wineInfo => {
      if (wineInfo.finalScore > highestScore) {
        highestScoreWineId = wineInfo.wine_id;
        highestScore = wineInfo.finalScore;
      }
    });
    if (highestScore === 0) {
      return null;
    } else {
      return this.props.allWineStyles.find(
        wineStyle => wineStyle.id === highestScoreWineId
      );
    }
  };

  render() {
    const { classes } = this.props;
    const { query } = this.state;
    const wineStyle = this.wineWithHighestScore();
    return (
      <div className={classes.root}>
        {query === "success" ? (
          <div>
            {wineStyle !== null ? (
              <Grid>
                <h2 className={classes.formTop}>
                  Here's your perfect wine style match based on your menu...
                </h2>
                <Grid className={classes.formMiddle}>
                  <Button
                    component={Link}
                    to={`/winestyles/${wineStyle.slug}`}
                    size="large"
                    className={classes.formMiddle}
                  >
                    <Grid container spacing={8}>
                      <Grid item xs={12} sm={4}>
                        <img
                          src={require(`../images/${wineStyle.slug}.png`)}
                          alt={wineStyle.name}
                          className={classes.wineImage}
                        />
                      </Grid>
                      <Grid item xs={12} sm={7}>
                        <h2 className={classes.h2}>{wineStyle.name}</h2>
                        <Typography variant="body1">
                          {wineStyle.short_description}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            ) : (
              <h2 className={classes.errorMessage}>
                Sorry, you have to pick at least one food item or prep method
                for us to match you up with a wine style!
              </h2>
            )}
            <Button
              variant="contained"
              color="secondary"
              className={classes.newPairingButton}
              onClick={this.props.goBackToFirstQuestion}
            >
              Find New Pairing
            </Button>
          </div>
        ) : (
          <div className={classes.progress}>
            <Fade in={query === "progress"} unmountOnExit>
              <CircularProgress size={100} thickness={4} />
            </Fade>
            <Typography>Finding the perfect match...</Typography>
          </div>
        )}
      </div>
    );
  }
}

ResultsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ResultsPage);
