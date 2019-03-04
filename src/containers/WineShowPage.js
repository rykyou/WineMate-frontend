import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';
import WineGridList from './WineGridList';
import WineStylesNavigation from './WineStylesNavigation';

const styles = theme => ({
  mainContainer: {

  },
});

class WineShowPage extends Component {
  render() {
    return (
      <div>
        <NavBar handleClickDialog={this.props.handleClickDialog}/>
        {this.props.chosenWineStyleObj ?
          <Grid className={this.props.classes.mainContainer}>
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
