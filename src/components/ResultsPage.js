import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, CircularProgress, Fade, Grid, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  progress: {
    marginTop: '30vh',
  },
  formMiddle: {
    marginTop: '3vh',
    paddingBottom: '5vh',
  },
  newPairingButton: {
    height: '8vh',
    width: '18vh'
  },
  wineImage: {
    marginTop: '5vh',
    height: "25vh"
  },
  text: {
    fontFamily: 'Sriracha'
  },
  h1: {
    color: theme.palette.primary.main,
    fontFamily: 'Sriracha, cursive',
  },
});

class ResultsPage extends Component {
  state = {
    query: 'progress',
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        query: 'success',
      });
    }, 2500);
  };

  wineIdWithHighestScore = () => {
    let highestScore = 0;
    let highestScoreWineId = 1;
    this.props.finalScoresArray().forEach(wineInfo => {
      if (wineInfo.finalScore > highestScore) {
        highestScoreWineId = wineInfo.wine_id;
        highestScore = wineInfo.finalScore;
      }
    })
    return highestScoreWineId;
  }

  wineObjWithHighestScore = () => {
    return this.props.allWineStyles.find(wineStyle => wineStyle.id === this.wineIdWithHighestScore())
  }

  render() {
    const { classes } = this.props;
    const { query } = this.state;
    const wineStyle = this.wineObjWithHighestScore()
    return (
      <div className={classes.root}>
        {query === 'success' ? (
          <div>
            <Grid className={classes.formTop}>
              <h2>Here's your perfect wine style match based on your menu...</h2>
            </Grid>
            <Grid className={classes.formMiddle}>
              <Button
                component={Link}
                to={`/winestyles/${wineStyle.slug}`}
                size="large"
                className={classes.formMiddle}
              >
                <Grid container spacing={8}>
                  <Grid item xs={4}>
                    <img
                      src={require(`../images/${wineStyle.slug}.png`)}
                      alt={wineStyle.name}
                      className={classes.wineImage}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <h1 className={classes.h1}>{wineStyle.name}</h1>
                    <Typography variant="body1" className={classes.text}>
                      {wineStyle.short_description}
                    </Typography>
                  </Grid>
                </Grid>
              </Button>
            </Grid>
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
            <Fade
              in={query === 'progress'}
              unmountOnExit
            >
              <CircularProgress size={100} thickness={4}/>
            </Fade>
            <Typography>Finding the perfect match...</Typography>
          </div>
        )}
      </div>
    )
  }
}

ResultsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultsPage);
