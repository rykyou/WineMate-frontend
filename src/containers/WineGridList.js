import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin: '20px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.secondary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

class WineGridList extends Component {
  state = {
    liked: false
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={3.5} cellHeight={360} spacing={10}>
          {this.props.chosenWineStyle.wines.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.name} />
              <GridListTileBar
                title={tile.name}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton onClick={() => console.log('clicked')}>
                    <FavoriteBorderIcon className={classes.title} />
                  </IconButton>
                }
                />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

WineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineGridList);
