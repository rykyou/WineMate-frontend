import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';
import WineGridList from './WineGridList';
import WineStylesNavigation from './WineStylesNavigation';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minHeight: "20vh"
  },
  paperContainer: {
    margin: '2vh'
  },
  navigation: {
    marginTop: '3vh'
  },
  text: {
    textAlign: 'center',
    margin: '5vh'
  },
  rightBottomPaper: {
    marginTop: '2vh',
    minHeight: "20vh",
    // paddingTop: '1vh',
  },
  martiniIcon: {
    maxWidth: '5vh',
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
        {this.props.chosenWineStyleObj ?
          <Grid className={classes.paperContainer}>
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

              <WineGridList chosenWineStyle={this.props.chosenWineStyleObj}/>

              <Grid className={classes.paperContainer} container spacing={24}>
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
