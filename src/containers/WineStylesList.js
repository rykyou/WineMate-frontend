import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import WineStyleCard from '../components/WineStyleCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function WineStylesList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {props.allWineStyles ?
          props.allWineStyles.map(wineStyle => <WineStyleCard key={wineStyle.id} wineStyle={wineStyle}/>)
        :
        null}
      </Grid>
    </div>
  );
}

WineStylesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineStylesList);
