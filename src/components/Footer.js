import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core/";
import winefollyLogo from "../images/winefolly-logo.png";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px"
  },
  winefollyLine: {
    display: "flex",
    alignItems: "center"
  },
  logoImg: {
    position: "relative",
    marginLeft: ".5vh"
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="subtitle2">
          Coded by{" "}
          <a
            href="https://github.com/rykyou"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Robin Kim
          </a>{" "}
          ©2019
        </Typography>
        <div className={classes.winefollyLine}>
          <Typography variant="subtitle2">
            Data Retrieved from and Inspired by
          </Typography>
          <a
            href="https://winefolly.com/hidden/the-9-major-wine-styles/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.logoImg}
          >
            <img src={winefollyLogo} alt="winefolly" height="30" />
          </a>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
