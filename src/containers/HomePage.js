import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Banner from '../components/Banner';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import WineStylesList from './WineStylesList';
import Button from '@material-ui/core/Button';
import BackgroundImage from '../images/background.jpg';
// import logo from '../images/logo_transparent.png';
// import Typography from '@material-ui/core/Typography';

const styles = {
    paperContainer: {
        background: `url(${BackgroundImage}) center center fixed`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        width: "100%",
        height: "900px",
    },
    card: {
      width: "500px",
      height: "200px",
      marginLeft: "1300px",
      paddingTop: "150px"
    },
    button: {
      width: "250px",
      height: "150px",
      marginLeft: "1350px",
    },
    empty: {
      height: "500px"
    },
    headerImage: {
      width: "auto",
      height: "700px",
      marginLeft: "1300px",
    }
};

class HomePage extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.paperContainer}>
          <div className={classes.empty}>
          </div>

            <Button className={classes.button} variant="contained" color="secondary" component={Link} to="/questionnaire">
              Find Your Pairing!
            </Button>

        </div>
        <WineStylesList allWineStyles={this.props.allWineStyles}/>
      </div>
    )
  }
}


HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
// export default HomePage;

// html {
//   /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/work.jpeg') no-repeat center center fixed;  */
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   height: 100%;
//   background: lightgrey;
// }
