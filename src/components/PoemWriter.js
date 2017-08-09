import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = { value: '',
    valid: false };
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
      {this.state.valid === false ?
      (<div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>) : ('')
      }
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    }, this.checkIfValid);
  }

  checkIfValid = () => {
    let currentPoem = this.state.value
    // has three lines
    let splitPoem = currentPoem.trim().split("\n")
    let stillInTheRunning = true
    if(splitPoem.length !== 3){
      console.log('not 3 lines! INVALID')
      this.setState({valid: false})
      return false
    }
    // first line has five words
    if(splitPoem[0].trim().split(" ").length !== 5) {
      console.log('first line is not 5 words! INVALID')
      stillInTheRunning = false
    }
    // second line has three words
    if(splitPoem[1].trim().split(" ").length !== 3) {
      console.log('second line is not 3 words! INVALID')
      stillInTheRunning = false
    }
    // third line has five words
    if(splitPoem[2].trim().split(" ").length !== 5) {
      console.log('third line is not 5 words! INVALID')
      stillInTheRunning = false
    }
    if(stillInTheRunning === true){
      console.log('Congratulations! Poem is valid!')}
    this.setState({valid: stillInTheRunning})


  }


} // end of class

export default PoemWriter;
