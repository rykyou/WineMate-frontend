import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import Icon from '@material-ui/core/Icon';
// import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    flexGrow: 1,
    minHeight: "240px"
  },
  wineImage: {
    maxHeight: "25vh"
  }
};

class WineStylesNavigation extends React.Component {
  state = {
    value: '',
  };

  componentDidMount() {
    this.setState({value: this.props.selectedWineStyle})
  }

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.handleSelectWineStyle(value)
  };

  render() {
    const { classes, allWineStyles } = this.props;
    const { value } = this.state;
    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        {allWineStyles ?
          allWineStyles.map(wineStyle => <BottomNavigationAction
            key={wineStyle.id}
            component={Link}
            to={`/winestyles/${wineStyle.slug}`}
            label={<FavoriteIcon />}
            value={wineStyle.slug}
            icon={<img
              src={require(`../images/${wineStyle.slug}.png`)}
              alt={wineStyle.slug}
              className={classes.wineImage}
            />}
          />)
        :
        null}
      </BottomNavigation>
    );
  }
}

WineStylesNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineStylesNavigation);
