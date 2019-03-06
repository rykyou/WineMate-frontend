import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import infographicImage from '../images/wine-folly-infographic.png';

const styles = {
  dialogImage: {
    width: '100%'
  }
};

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
            <img src={infographicImage} className={this.props.classes.dialogImage} alt="dialog"/>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

LargerInfographicDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LargerInfographicDialog);
