import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, Slide } from '@material-ui/core';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class WineDialog extends React.Component {

  render() {
    return (
      <div>
        <Dialog
          open={this.props.wineDialogOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.handleWineDialogClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Wine Detail"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.props.chosenWineStyleObj}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleWineDialogClose} color="primary">
              X
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default WineDialog;
