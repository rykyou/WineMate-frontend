import React, { Component } from 'react';
import WineCard from '../components/WineCard';


class WineStylesList extends Component {

  wineStyleCards = () => {
    this.props.allWineStyles.map(wineStyle => {return(
      <WineCard />
    )})
  }

  render() {
    console.log(this.props.allWineStyles)
    return (
      <div>
        {this.props.allWineStyles.map(wineStyle => <WineCard key={wineStyle.id} wineStyle={wineStyle}/>)}
      </div>
    )
  }
}

export default WineStylesList;
