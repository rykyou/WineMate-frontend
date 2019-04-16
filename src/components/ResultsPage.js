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
  formTop: {
    height: '5vh'
  },
  formMiddle: {
    height: '40vh',
    marginLeft: '3vh',
    paddingTop: '5vh'
  },
  newPairingButton: {
    color: theme.palette.secondary.dark,
  },
  wineImage: {
    marginTop: '5vh',
    height: "25vh"
  }
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
            <Grid className={classes.formTop}>
              <h1>{wineStyle.name}</h1>
            </Grid>
            <Grid className={classes.formMiddle}>
              <Grid container spacing={24}>
                <Grid item xs={4}>
                  <img
                    src={require(`../images/${wineStyle.slug}.png`)}
                    alt={wineStyle.name}
                    className={classes.wineImage}
                  />
                </Grid>
                <Grid item xs={7}>
                  <h3>{wineStyle.short_description}</h3>
                    <Button
                    component={Link}
                    to={`/winestyles/${wineStyle.slug}`}
                    variant="contained"
                    className={classes.newPairingButton}
                    >
                    Click for more details
                    </Button>
                </Grid>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
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
