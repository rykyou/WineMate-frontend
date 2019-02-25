import React, { Component } from 'react';



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
    console.log(this.props.finalScoresArray())
    console.log(this.wineIdWithHighestScore())
    console.log(this.wineObjWithHighestScore())
    const wineStyle = this.wineObjWithHighestScore()
    return (
      <div>
        <h1>ResultsPage</h1>
        <h3>Here's your perfect wine style match for your meal!</h3>
        <h4>{wineStyle.name}</h4>
      </div>
    )
  }
}

export default ResultsPage;
