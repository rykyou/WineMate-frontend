import React, { Component } from 'react';
import WineGridList from './WineGridList';

class WineShowPage extends Component {
  render() {
    return (
      <div>
        {this.props.chosenWineStyleObj ?
          <div>
            <WineGridList chosenWineStyle={this.props.chosenWineStyleObj}/>
            <h1>{this.props.chosenWineStyleObj.name}</h1>
            <img
              src={require(`../images/${this.props.chosenWineStyleObj.slug}.png`)}
              alt={this.props.chosenWineStyleObj.name}
            />
            <h2>{this.props.chosenWineStyleObj.description}</h2>
            <h2>Try this wine style with: {this.props.chosenWineStyleObj.cuisine_title}</h2>
            <h4>{this.props.chosenWineStyleObj.cuisine_description}</h4>
          </div>
        :
        null}
      </div>
    )
  }
}

export default WineShowPage;
