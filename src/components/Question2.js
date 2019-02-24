import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';


class Question2 extends Component {
  state = {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false
  }

  updateCheck() {
    this.setState(oldState => {
      return {
        checked: !oldState.checked
      }
    })
  }

  meatCheckboxes = () => {
    const meatArr = this.props.allFood.filter(food => food.category === "Meat")

    let checkboxComponents = meatArr.map((meat, index) => (
      <Checkbox
        key={meat.id}
        label={meat.name + ` (${meat.examples})`}
        onCheck={this.updateCheck.bind(this)}
        style={styles.checkbox}
      />
    ))

    checkboxComponents.map(comp => comp.checked = this.state.checked)
    return checkboxComponents
  }

  render() {
    return (
      <div>
        <h1>Question2</h1>
        <h3>Does it include meat?</h3>
        <h3>Choose as many protein options as needed...</h3>

        {this.meatCheckboxes()}

        <RaisedButton
          label="Back"
          style={{margin: 50}}
          onClick={this.props.goToPreviousQuestion}
        />
        <RaisedButton
          label="Next"
          style={{margin: 50}}
          onClick={this.props.goToNextQuestion}
        />
      </div>
    )
  }
}

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export default Question2;
