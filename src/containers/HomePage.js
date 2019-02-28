import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Banner from '../components/Banner';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
import WineStylesList from './WineStylesList';
import Button from '@material-ui/core/Button';
import BackgroundImage from '../images/background.jpg';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import poster from '../images/wine-folly-poster.png';
// import Typography from '@material-ui/core/Typography';

const styles = {
    paperContainer: {
        background: `url(${BackgroundImage}) center center fixed`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        width: "100%",
        height: "900px",
    },
    button: {
      width: "250px",
      height: "150px",
      marginLeft: "1350px",
    },
    empty: {
      height: "300px"
    },
    smallEmpty: {
      height: "100px"
    },
};

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);


class HomePage extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.paperContainer}>
          <div className={classes.empty}>
          </div>

            <Button className={classes.button} variant="contained" color="secondary" component={Link} to="/questionnaire">
              Find Your Pairing!
            </Button>

            <div className={classes.smallEmpty}></div>

            <Button className={classes.button} variant="contained" color="secondary" onClick={this.handleClickOpen}>
              HOW THE PAIRING WORKS
            </Button>

        </div>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            How the Food and Wine Pairing Works...
          </DialogTitle>
          <DialogContent>
            <img src={poster} alt="dialog" height="800"/>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
              facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
              at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
              auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Got it!
            </Button>
          </DialogActions>
        </Dialog>
        <WineStylesList allWineStyles={this.props.allWineStyles}/>
      </div>
    )
  }
}


HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);


// html {
//   /* background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/work.jpeg') no-repeat center center fixed;  */
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
//   height: 100%;
//   background: lightgrey;
// }
