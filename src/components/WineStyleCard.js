import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  card: {
    minWidth: 275,
    width: 20,

  },
  pos: {
    marginBottom: 12,
  },
  paper: {

    textAlign: 'center',

  },
});

function WineStyleCard(props) {
  const { classes } = props;

  return (
    <Grid component={Link} to={`/winestyles/${props.wineStyle.slug}`} item xs>

        <img className={classes.paper} src={require(`../images/${props.wineStyle.slug}.png`)} alt={props.wineStyle.name}/>

    </Grid>
  );
}

export default withStyles(styles)(WineStyleCard);
