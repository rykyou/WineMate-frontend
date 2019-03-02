import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import WineStylesList from './WineStylesList';
import Button from '@material-ui/core/Button';
import BackgroundImage from '../images/background.jpg';
// import Typography from '@material-ui/core/Typography';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const styles = {
    paperContainer: {
        background: `url(${BackgroundImage}) center center fixed`,
        backgroundSize: 'cover',
        width: "100%",
        height: "900px",
    },
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

        <Slider autoplay={3000}>
        	{content.map((item, index) => (
        		<div
        			key={index}
        			style={{ background: `url('${item.image}') no-repeat center center` }}
        		>
        			<div className="center">
        				<h1>{item.title}</h1>
        				<p>{item.description}</p>
        				<button>{item.button}</button>
        			</div>
        		</div>
        	))}
        </Slider>
        <div className={classes.paperContainer}>
          <div className={classes.empty}>
          </div>

          <Button className={classes.button} variant="contained" color="secondary" component={Link} to="/questionnaire">
            Find Your Pairing!
          </Button>

          <div className={classes.smallEmpty}></div>

          <Button className={classes.button} variant="contained" color="secondary" onClick={this.props.handleClickDialog}>
            HOW THE PAIRING WORKS
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


// html {
//   /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/work.jpeg') no-repeat center center fixed;  */
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   height: 100%;
//   background: lightgrey;
// }
