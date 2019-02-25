import React, { Component } from 'react';



class WineShowPage extends Component {

  render() {
    // console.log(this.props.chosenWineStyleObj)

    return (
      <div>
        <h1>WineShowPage</h1>
        {this.props.chosenWineStyleObj ? <h2>{this.props.chosenWineStyleObj.name}</h2> : null}
      </div>
    )
  }
}

export default WineShowPage;
