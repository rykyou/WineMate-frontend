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
  },
  paperContainer: {
    margin: '40px'
  }
});


class WineShowPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar handleClickDialog={this.props.handleClickDialog}/>
        {this.props.chosenWineStyleObj ?
          <Grid>
            <Grid container
              spacing={0}
              alignItems="center"
              justify="center"
              style={{ minHeight: '70vh' }}
            >
              <Grid container>
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
                    <Typography variant="h5" component="h3">
                      {this.props.chosenWineStyleObj.description}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                      Pair this wine style with: {this.props.chosenWineStyleObj.cuisine_title}
                    </Typography>
                    <Typography variant="h6" component="h3">
                      {this.props.chosenWineStyleObj.cuisine_description}
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

// export default WineShowPage;
