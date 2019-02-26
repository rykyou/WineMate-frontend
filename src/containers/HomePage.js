import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Banner from '../components/Banner';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import WineStylesList from './WineStylesList';
import Button from '@material-ui/core/Button';
import BackgroundImage from '../images/background.jpg';

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
      marginLeft: "1400px",
      paddingTop: "150px"
    },
    button: {
      marginLeft: "160px",
    },
    empty: {
      height: "400px"
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
          <Card className={classes.card}>
            <Button className={classes.button} variant="contained" color="secondary" component={Link} to="/questionnaire">
              Find Your Pairing!
            </Button>
          </Card>
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
