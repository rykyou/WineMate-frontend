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
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function WineCard(props) {
  const { classes } = props;

  return (
    <Grid component={Link} to={`/winestyles/${props.wineStyle.slug}`} item xs>
      <Paper className={classes.paper}>
        <img src={imageURL(props.wineStyle.short_name)} alt={props.wineStyle.name}/>
      </Paper>
    </Grid>
  );
}

function imageURL(wineName) {
    let formattedName = wineName.toLowerCase().split(" ").join('-')
    return require(`../images/${formattedName}.png`)
}

export default withStyles(styles)(WineCard);
