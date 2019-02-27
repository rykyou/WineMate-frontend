import React, { Component } from 'react';

// import * as pictures from '../images'

class ResultsPage extends Component {

  wineIdWithHighestScore = () => {
    let highestScore = 0;
    let highestScoreWineId = 1;
    this.props.finalScoresArray().forEach(wineInfo => {
      if (wineInfo.finalScore > highestScore) {
        highestScoreWineId = wineInfo.wine_id;
        highestScore = wineInfo.finalScore;
      }
    })
    return highestScoreWineId;
  }

  wineObjWithHighestScore = () => {
    return this.props.allWineStyles.find(wineStyle => wineStyle.id === this.wineIdWithHighestScore())
  }

  render() {
    const wineStyle = this.wineObjWithHighestScore()
    return (
      <div>
        <h1>Here's your perfect wine style match for your meal!</h1>
        <h1>{wineStyle.name}</h1>
        <img src={require(`../images/${wineStyle.slug}.png`)} alt={wineStyle.name}/>
        <h3>{wineStyle.description}</h3>
        <h3>Try it with: {wineStyle.cuisine_title}</h3>
      </div>
    )
  }
}

export default ResultsPage;
