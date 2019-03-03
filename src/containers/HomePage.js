import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import WineStylesList from './WineStylesList';
import Button from '@material-ui/core/Button';
import AnimatedSlider from '../components/AnimatedSlider';
// import Typography from '@material-ui/core/Typography';

const styles = {
    // paperContainer: {
    //     background: `url(${BackgroundImage}) center center fixed`,
    //     backgroundSize: 'cover',
    //     width: "100%",
    //     height: "900px",
    // },
    button: {
      width: "250px",
      height: "150px",
      marginLeft: "1350px",
    },
    empty: {
      height: "300px"
    },
    smallEmpty: {
      height: "100px"
    },
};


class HomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AnimatedSlider
          handleClickDialog={this.props.handleClickDialog}
        />
        <WineStylesList allWineStyles={this.props.allWineStyles}/>
      </div>
    )
  }
}


HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);


// html {
//   /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/work.jpeg') no-repeat center center fixed;  */
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   height: 100%;
//   background: lightgrey;
// }
