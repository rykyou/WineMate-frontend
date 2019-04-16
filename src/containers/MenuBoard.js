import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';
// import menuboard from '../images/menuboard.png';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    minHeight: '80vh',
    maxHeight: '70vh',
    // backgroundImage: 'url(' + menuboard + ')',
    // backgroundSize: 'contain',
    height: '100%',
    // backgroundRepeat: 'no-repeat no-repeat',
    backgroundPosition: '100%'
  },
  center: {
    // marginLeft: '12vh',
    // marginTop: '6vh',
    textAlign: 'center'
  },
  menuTop: {
    marginBottom: '3vh',
  },
  innerMenu: {
    minHeight: '15vh'
  },
});


class MenuBoard extends Component {
  chosenFood = () => {
    return this.props.chosenFoodObjects().map(food =>
      <div key={food.id}>
        <Typography variant="h5" key={food.id}>{food.name}</Typography>
      </div>
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.paper}>
        <div className={classes.center}>
          <Grid className={classes.menuTop}>
            <h1>Menu Board</h1>
          </Grid>
          <Grid container spacing={24}>
            <Grid className={classes.innerMenu} item xs={6}>
              {this.chosenFood()}
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

MenuBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBoard);
