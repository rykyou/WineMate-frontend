import React from 'react';
import PropTypes from 'prop-types';
import {AppBar, Button, Dialog, DialogContent, Grid, IconButton, 
  Toolbar, Typography, Slide, withStyles} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import infographicImage from '../images/wine-folly-infographic.png';
import LargerInfographicDialog from './LargerInfographicDialog';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  dialogContent: {
    marginTop: '3vh'
  },
  title: {
    marginBottom: '3vh',
    color: theme.palette.primary.main,
  },
  subTitle: {
    color: theme.palette.primary.main,
  },
  bottomMargin: {
    marginBottom: '3vh'
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class InfographicDialog extends React.Component {
  state = {
    openLargerImage: false,
  };

  handleCloseLargerImage = () => {
    this.setState({ openLargerImage: false });
  };

  handleShowLargerImage = () => {
    this.setState({ openLargerImage: true });
  }

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
              <Typography variant="h6" color="inherit" className={classes.flex}>
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
            <Grid container
              spacing={0}
              alignItems="center"
              justify="center"
              style={{ minHeight: '70vh' }}
            >
              <Grid item xs={5} >
                <Button onClick={this.handleShowLargerImage}>
                  <img
                    src={infographicImage}
                    alt="dialog"
                    height="860"
                  />
              </Button>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="h4" className={classes.title}>
                  Simplifying the Science of Food and Wine Pairing
                </Typography>
                <Typography variant="subheading" className={classes.bottomMargin}>
                  Traditionally, there are two ways to understand wines: by variety (e.g. Sauvignon Blanc or Syrah) or by region (e.g. Barossa or Bordeaux).
                  However, with so many different angles to approach wine, how do you get started?
                  Fortunately, you can start classifying grape varieties by these 9 broader styles!
                </Typography>
                <Typography variant="subheading" className={classes.bottomMargin}>
                  Borrowed from Wine Folly's easy-to-use pairing chart, our algorithm makes finding the perfect wine style easy. The perfect wine style match for your dinner (lunch or breakfast - shhh we'll keep it a secret) is only a quick survey away.
                </Typography>
                <Typography variant="h5" className={classes.subTitle}>
                  Why do certain wines go with certain foods?
                </Typography>
                <Typography variant="subheading" className={classes.bottomMargin}>
                  When you start analyzing the structure of wine, each type of wine features different characteristics such as acidity, tannin, alcohol level and sweetness. If you start thinking about wine traits as flavor ingredients, it becomes easier to pair them with a meal.
                </Typography>
                <Typography variant="h5" className={classes.subTitle}>
                  How it works in action...
                </Typography>
                <Typography variant="subheading" className={classes.bottomMargin}>
                  When it comes to food and wine pairing, most folks lean on the phrase “What grows together, goes together” as a starting point.
                  For example, you could pair Italian Sangiovese with Italian pasta and make a decent pairing without trying.
                </Typography>
                <Typography variant="h5" className={classes.subTitle}>
                  Example of how the pairing works
                </Typography>
                <Typography variant="subheading" className={classes.bottomMargin}>
                  Let's take fish tacos as an example and break them down to their core ingredients. The fish turns out to be a pretty polarizing ingredient that doesn’t usually pair with red wines. Additionally, cilantro and lime will push this dish closer to a much more specific wine.

                  If you follow the chart, you’ll see that a light-bodied white wine looks to be the best option for this dish. And, it is! Of the wines on the list shown, you’ll do great with a Vermentino, Albariño, or Pinot Grigio.
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
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfographicDialog);
