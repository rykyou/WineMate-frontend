import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core/';

const styles = {
  root: {
    flexGrow: 1,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: 'center'
  },
  flex: {
    flex: 1,
  },
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Typography className={classes.root} variant="subtitle1">Coded by Robin Kim.</Typography>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
