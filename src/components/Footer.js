import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core/";

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
            href="https://github.com/imrobinkim"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Robin Kim
          </a>{" "}
          ©2020
        </Typography>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
