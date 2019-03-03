import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WineGridList from './WineGridList';
import WineStylesNavigation from './WineStylesNavigation';

// paperContainer: {
//     background: `url(${BackgroundImage}) center center fixed`,
//     backgroundSize: 'cover',
//     width: "100%",
//     height: "900px",
// },
// render() {
// const { classes } = this.props;
// return (
//   <div>
//   <div className={classes.paperContainer}>

const styles = theme => ({
  mainContainer: {
    background: theme.palette.secondary.mainGradient,
  },
});

class WineShowPage extends Component {
  render() {
    return (
      <div>
        {this.props.chosenWineStyleObj ?
          <Grid className={this.props.classes.mainContainer}>
            <Grid container
              spacing={0}
              alignItems="center"
              justify="center"
              style={{ minHeight: '70vh' }}
            >
              <WineStylesNavigation
                allWineStyles={this.props.allWineStyles}
                handleSelectWineStyle={this.props.handleSelectWineStyle}
                selectedWineStyle={this.props.selectedWineStyle}
              />
              <WineGridList chosenWineStyle={this.props.chosenWineStyleObj}/>
              <h1>{this.props.chosenWineStyleObj.name}</h1>
              <img
                src={require(`../images/${this.props.chosenWineStyleObj.slug}.png`)}
                alt={this.props.chosenWineStyleObj.name}
              />
              <h2>{this.props.chosenWineStyleObj.description}</h2>
              <h2>Try this wine style with: {this.props.chosenWineStyleObj.cuisine_title}</h2>
              <h4>{this.props.chosenWineStyleObj.cuisine_description}</h4>
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
