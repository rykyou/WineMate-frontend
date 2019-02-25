import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
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
};

function WineCard(props) {
  console.log(props)
  const { classes } = props;

  return (
    <Card onClick={() => console.log('clicked')} className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.wineStyle.name}
          <img src={imageURL(props.wineStyle.short_name)} alt={props.wineStyle.name}/>
        </Typography>
      </CardContent>
    </Card>
  );
}

function imageURL(wineName) {
    let formattedName = wineName.toLowerCase().split(" ").join('-')
    return require(`../images/${formattedName}.png`)
}

export default withStyles(styles)(WineCard);
