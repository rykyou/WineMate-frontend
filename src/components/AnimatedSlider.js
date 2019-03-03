import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import '../slider-animations.css';
import '../slider-styles.css';

import BackgroundImage1 from '../images/background1.jpg';
import BackgroundImage2 from '../images/background2.jpg';
import BackgroundImage3 from '../images/background3.jpg';

class AnimatedSlider extends Component {
  content = [
  	{
  		title: 'Find the Perfect Wine Style Match',
  		description: "Don't know where to start with the wine selection? Let us know what's on the menu and we'll help you find the perfect wine style.",
  		button: 'Find Your Pairing',
  		image: BackgroundImage1,
      handleButtonClick: "Go to Quiz"
  	},
  	{
  		title: 'Food & Wine Pairing Science',
  		description:
  		"Our quiz is based on Wine Folly's Food & Wine Pairing Method. Click to discover the theory of food and wine pairing and how we are able to suggest the best wine style match based on the flavor profile of your meal.",
  		button: 'Discover',
  		image: BackgroundImage2,
      handleButtonClick: "Open InfographicDialog"
  	},
  	{
  		title: 'The 9 Primary Styles of Wine',
  		description:
  		"With over 1,300 types of wine in the world, it can be daunting task to find the perfect wine. That's why we've simplified it with 9 broader styles. Become a wine connisseur in no time.",
  		button: 'Explore',
  		image: BackgroundImage3,
      handleButtonClick: "Go to WineStyles"
  	}
  ];

  buttonToRender = (item) => {
    if (item.handleButtonClick === "Go to Quiz") {
      return (<Link to="/questionnaire"><button>{item.button}</button></Link>)
    } else if (item.handleButtonClick === "Open InfographicDialog") {
      return <button onClick={this.props.handleClickDialog}>{item.button}</button>
    } else if (item.handleButtonClick === "Go to WineStyles") {
      return <Link to="/winestyles/bold-red"><button>{item.button}</button></Link>
    }
  }

  render() {
    return (
    	<div>
    		<Slider autoplay={2000} infinite={true} className="slider-wrapper">
    			{this.content.map((item, index) => (
    				<div
    					key={index}
    					className="slider-content"
    					style={{ background: `url('${item.image}') no-repeat center center` }}
    				>
    					<div className="inner">
    						<h1>{item.title}</h1>
    						<p>{item.description}</p>
                {this.buttonToRender(item)}
    					</div>
    				</div>
    			))}
    		</Slider>
    	</div>
    );
  }
}

export default AnimatedSlider;
