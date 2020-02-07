import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Slide,
  withStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import infographicImage from "../images/wine-folly-infographic.png";
import LargerInfographicDialog from "./LargerInfographicDialog";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1,
    fontFamily: "Sriracha",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px"
    }
  },
  dialogContent: {
    margin: "3vh"
  },
  title: {
    marginBottom: "3vh",
    color: theme.palette.primary.main,
    fontFamily: "Sriracha"
  },
  image: {
    maxWidth: "100%"
  },
  subTitle: {
    color: theme.palette.primary.main,
    margin: "1vh",
    fontFamily: "Sriracha"
  },
  textBottomMargin: {
    marginLeft: "3vh",
    marginBottom: "3vh"
  },
  winefolly: {
    flex: 1,
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center"
  }
  // circle: {
  // <div className={classes.circle} style={{backgroundImage: 'url(' + greenCircle + ')'}}>
  // background: 'url(' + redCircle + ')',
  // maxheight: '10vh',
  //   backgroundSize: 'contain',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'left'
  // },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class InfographicDialog extends React.Component {
  state = {
    openLargerImage: false
  };

  handleCloseLargerImage = () => {
    this.setState({ openLargerImage: false });
  };

  handleShowLargerImage = () => {
    this.setState({ openLargerImage: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.openDialogState}
          onClose={this.props.handleClickDialog}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h5" color="inherit" className={classes.flex}>
                How the Food and Wine Pairing Works...
              </Typography>
              <IconButton
                color="inherit"
                onClick={this.props.handleClickDialog}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <DialogContent className={classes.dialogContent}>
            <Grid container spacing={40} alignItems="center" justify="center">
              <Grid item md={5}>
                <Button onClick={this.handleShowLargerImage}>
                  <img
                    src={infographicImage}
                    alt="dialog"
                    className={classes.image}
                  />
                </Button>
              </Grid>
              <Grid item md={7}>
                <Typography variant="h5" className={classes.title}>
                  Simplifying the Science of Food and Wine Pairing
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.textBottomMargin}
                >
                  Finding the perfect wine and food pairing can take hours of
                  research, especially for those just starting out on their wine
                  exploration. WineMate aims to simplify this process. Simply go
                  through the pairing quiz to let us know what’s on the menu,
                  and we’ll match you up with the perfect wine style for your
                  meal.
                </Typography>
                <Typography variant="h5" className={classes.subTitle}>
                  How does it work?
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.textBottomMargin}
                >
                  Our pairing quiz is based on Wine Folly’s Food & Wine Pairing
                  Method. They have broken down the complicated science of food
                  and wine pairing into an easy-to-use chart (illustrated on
                  left). Each ingredient or preparation method has a specific
                  “match score” - ranging from 0 to 2 - that is associated with
                  each of the nine wine styles. The algorithm works in such a
                  way that selecting a specific ingredient or prep method will
                  add up the match scores for each wine style. The wine style
                  with the highest compiled score is then returned at the end of
                  the quiz.
                </Typography>
                <Typography
                  variant="h5"
                  className={classes.textBottomMargin}
                ></Typography>
                <Typography
                  variant="body1"
                  className={classes.textBottomMargin}
                >
                  We’ve made minor changes to the selection of ingredients so
                  that those who are not familiar with terms like “nightshades”
                  or “alliums” can instead choose “tomatoes” or “onion”. Our
                  goal was to create a food and wine matching experience that
                  wasn’t exclusive to connoisseurs and epicures.
                </Typography>
                <Typography variant="h5" className={classes.subTitle}>
                  Why do certain wines go with certain foods?
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.textBottomMargin}
                >
                  Each type of wine is characterized by different levels of
                  acidity, tannin, alcohol level, and sweetness. Likewise, each
                  food ingredient holds different flavor profiles that may
                  either compliment or clash components of a wine. For example,
                  tannin - an astringent substance found in red wines - has a
                  palate-cleansing effect. It counteracts oiliness and helps to
                  pull out proteins produced by our saliva glands. This explains
                  why red wine pairs nicely with fatty cuts of beef.
                </Typography>
                <Typography variant="h5" className={classes.subTitle}>
                  The 9 primary styles of wine
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.textBottomMargin}
                >
                  If you are just starting out your wine exploration, it’s
                  important to keep the process simple and easy to understand.
                  That’s why Wine Folly has categorized the wide variety of
                  wines into 9 broad styles. Although there might be subtle
                  differences within each wine style due to the vintage or
                  region, tasting an example from each of the 9 styles will give
                  you a good idea of the range of all the wines.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.textBottomMargin}
                >
                  So what are you waiting for? The perfect wine style match for
                  your dinner (lunch or breakfast - shhh we’ll keep it a secret)
                  is only a quick survey away!
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        <LargerInfographicDialog
          openLargerImage={this.state.openLargerImage}
          handleCloseLargerImage={this.handleCloseLargerImage}
        />
      </div>
    );
  }
}

InfographicDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InfographicDialog);
