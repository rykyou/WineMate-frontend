import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import infographicImage from '../images/wine-folly-infographic.png';
import LargerInfographicDialog from './LargerInfographicDialog';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  dialogContent: {
    marginTop: '3vh'
  }
};

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
                <Typography gutterBottom>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                  auctor fringilla.
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
