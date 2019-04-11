import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import NavBar from '../components/NavBar';
import WineStylesNavigation from './WineStylesNavigation';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minHeight: "20vh"
  },
  wholePage: {
    margin: '2%'
  },
  paperContainer: {
    margin: '2vh'
  },
  descriptionContainer: {
    margin: '2% 10%'
  },
  navigation: {
    marginTop: '3vh'
  },
  text: {
    textAlign: 'center',
    margin: '3vh'
  },
  rightBottomPaper: {
    marginTop: '2vh',
    minHeight: "15vh",
    // paddingTop: '1vh',
  },
  martiniIcon: {
    maxWidth: '5vh',
  },

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
        {this.props.chosenWineStyleObj ?
          <Grid className={classes.wholePage}>
            <Grid container
              spacing={0}
              alignItems="center"
              justify="center"
              style={{ minHeight: '70vh' }}
            >
              <Grid container className={classes.navigation}>
                <WineStylesNavigation
                  allWineStyles={this.props.allWineStyles}
                  handleSelectWineStyle={this.props.handleSelectWineStyle}
                  selectedWineStyle={this.props.selectedWineStyle}
                />
              </Grid>

              <h1>{this.props.chosenWineStyleObj.name}</h1>

              <Grid className={classes.descriptionContainer} container spacing={24}>
                <Grid item xs={6}>
                  <Paper className={classes.root} elevation={1}>
                    <Typography className={classes.text} variant="h5" component="h5">
                      {this.props.chosenWineStyleObj.description}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.root} elevation={1}>
                    <Typography className={classes.text} variant="h5" component="h5">
                      <img src={require(`../images/star-icon.png`)}
                        alt='star glass'
                        className={classes.martiniIcon}
                      />
                      Food Pairing Affinities
                    </Typography>
                    <Typography className={classes.text} variant="h6" component="h6">
                      {this.props.chosenWineStyleObj.cuisine_title}
                    </Typography>
                    <Typography className={classes.text} variant="h6" component="h6">
                      Like... {this.props.chosenWineStyleObj.cuisine_description}
                    </Typography>
                  </Paper>
                  <Paper className={classes.rightBottomPaper} elevation={1}>
                    <Typography className={classes.text} variant="h5" component="h5">
                      <img src={require(`../images/martini-icon.png`)}
                        alt='martini glass'
                        className={classes.martiniIcon}
                      />
                      Serving Temperature
                    </Typography>
                    <Typography className={classes.text} variant="h6" component="h6">
                      {this.props.chosenWineStyleObj.serving_temp}
                    </Typography>
                  </Paper>
                  <Paper className={classes.rightBottomPaper} elevation={1}>
                    <Typography className={classes.text} variant="h5" component="h5">
                      Examples
                    </Typography>

                    {this.props.chosenWineStyleObj.wines.map(wine => {return (
                      <Typography className={classes.text} variant="body1" key={wine.name}>
                        {wine.name}
                      </Typography>
                    )})}

                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        :
        null}
      </div>
    )
  }
}

WineShowPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineShowPage);
