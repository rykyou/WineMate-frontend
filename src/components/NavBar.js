import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';
// IconButton, Menu, MenuItem,
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import mainLogo from '../images/winemate-logo.png';

const styles = {
  root: {
    flexGrow: 1,
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

class MenuAppBar extends React.Component {
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
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Link to='/'>
            <img
              src={mainLogo}
              alt=""
              height="70"
            />
          </Link>
          <Typography variant="h6" className={classes.flex}>
          </Typography>
          {this.props.chosenWineStyleObj ?
            <Button className={classes.text} component={Link} to="/questionnaire">
              Find New Pairing
            </Button>
          : null}
          <Button className={classes.text} onClick={this.props.handleClickDialog}>
            How it works
          </Button>

        </Toolbar>
      </AppBar>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);

// <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//   <MenuIcon />
// </IconButton>



// <FormGroup>
//   <FormControlLabel
//     control={
//       <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
//     }
//     label={auth ? 'Logout' : 'Login'}
//   />
// </FormGroup>

// {auth && (
//   <div>
//     <IconButton
//       aria-owns={open ? 'menu-appbar' : undefined}
//       aria-haspopup="true"
//       onClick={this.handleMenu}
//       color="inherit"
//     >
//       <AccountCircle />
//     </IconButton>
//     <Menu
//       id="menu-appbar"
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={open}
//       onClose={this.handleClose}
//     >
//       <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//       <MenuItem onClick={this.handleClose}>My account</MenuItem>
//     </Menu>
//   </div>
// )}
