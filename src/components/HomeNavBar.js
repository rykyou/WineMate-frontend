import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core";
import mainLogo from "../images/logo.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    zIndex: 1000
  },
  toolBar: {
    minHeight: "75px"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  rightButton: {
    color: "#ffffff",
    fontSize: "16px",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  leftButton: {
    color: "#ffffff",
    marginRight: "2vh",
    fontSize: "16px",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
});

class HomeNavBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
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

    return (
      <AppBar
        className={classes.root}
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar className={classes.toolBar}>
          <Link to="/">
            <img src={mainLogo} alt="" height="20" />
          </Link>
          <Typography variant="h6" className={classes.flex}></Typography>
          <Button
            className={classes.leftButton}
            component={Link}
            to="/questionnaire"
          >
            Find New Pairing
          </Button>
          <Button
            className={classes.rightButton}
            onClick={this.props.handleClickDialog}
          >
            How it works
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

HomeNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeNavBar);
