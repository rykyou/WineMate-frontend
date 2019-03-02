import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import infographicImage from '../images/wine-folly-infographic.png';

class LargerInfographicDialog extends React.Component {

  render() {
    return (
      <div>
        <Dialog
          open={this.props.openLargerImage}
          onClose={this.props.handleCloseLargerImage}
          maxWidth="lg"
          scroll="body"
          aria-labelledby="scroll-dialog-title"
        >
          <DialogContent>
            <img src={infographicImage} alt="dialog" />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default LargerInfographicDialog;
