import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core/';
import winefollyLogo from '../images/winefolly-logo.png';

const styles = {
  root: {
    display: 'flex',
    bottom: 0,
    left: 0,
    right: 0,
    margin: '2%',
    justifyContent: 'center'
  },
  logoImg: {
    position: 'relative',
    marginLeft: '.5vh',
    // paddingBottom: '3vh',
  },
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="subtitle2">
          Coded by Robin Kim ©2019 || Data Retrieved from and Inspired by
        </Typography>
        <a
          href='https://winefolly.com/hidden/the-9-major-wine-styles/'
          target="_blank"
          rel="noopener noreferrer"
          className={classes.logoImg}
        >
          <img
          src={winefollyLogo}
          alt="winefolly"
          height="30"
          />
        </a>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
