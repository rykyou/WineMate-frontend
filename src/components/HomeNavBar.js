import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppBar, Button, Toolbar, Typography, withStyles} from '@material-ui/core';
import mainLogo from '../images/winemate-logo.png';

const styles = {
  root: {
    flexGrow: 1,
    position: "absolute",
    zIndex: 1000
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  text: {
    color: "#ffffff"
  }

};

class HomeNavBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };


  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    // const { auth, anchorEl } = this.state;
    // const open = Boolean(anchorEl);

    return (
      <AppBar className={classes.root} position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Link to='/'>
            <img
              src={mainLogo}
              alt=""
              height="70"
            />
          </Link>
          {}
          <Typography variant="h6" className={classes.flex}>
          </Typography>
          <Button className={classes.text} component={Link} to="/questionnaire">
            Find New Pairing
          </Button>
          <Button className={classes.text} onClick={this.props.handleClickDialog}>
            How it works
          </Button>

        </Toolbar>
      </AppBar>
    );
  }
}

HomeNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeNavBar);
