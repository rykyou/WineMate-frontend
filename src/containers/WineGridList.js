import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridListTile, GridListTileBar, withStyles } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={3.5} cellHeight={360} spacing={10}>
          {this.props.chosenWineStyle.wines.map(tile => (
            <GridListTile key={tile.img} onClick={this.props.handleWineDialogOpen}>
              <img src={tile.img} alt={tile.name} key={tile.id}/>
              <GridListTileBar
                title={tile.name}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                key={tile.id}
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

// actionIcon={
//   <IconButton onClick={() => console.log('clicked')}>
//     <FavoriteBorderIcon className={classes.title} />
//   </IconButton>
// }
