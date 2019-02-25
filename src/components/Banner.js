// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from 'material-ui/IconButton';
// import ActionHome from 'material-ui/svg-icons/action/home';
//
// import BackgroundImage from '../images/background.jpg'; // Import using relative path
//
//
// const styles = {
//   media: {
//     height: 140,
//   },
// };
//
// function Banner(props) {
//   const { classes } = props;
//     return(
//       <CardMedia className={classes.media} image="../images/background.jpg">
//         img
//       </CardMedia>
//     )
// }
//
// Banner.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(Banner);


import React from 'react';
import BackgroundImage from '../images/background.jpg'; //


const styles = {
    paperContainer: {
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${BackgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        width: "100%",
        height: "900px",
    },
    // html: {
    //   background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${BackgroundImage}) no-repeat center center fixed`,
    //   webkit-background-size: 'cover',
    //   moz-background-size: 'cover',
    //   o-background-size: 'cover',
    //   background-size: 'cover',
    //   height: '100%',
    // }
};

export default class Banner extends React.Component {
    render() {
        return (
            <div style={styles.paperContainer}>
            </div>
        )
    }
}
