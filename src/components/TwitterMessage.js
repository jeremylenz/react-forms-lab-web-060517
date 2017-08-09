import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { tweetText: '',
      remainingChars: 140
     };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweetText} onChange={this.handleChange}/>
        <p>Remaining characters: {this.state.remainingChars}</p>
      </div>
    );
  }

  updateRemainingChars = (event) => {
    let maxChars = this.props.maxChars
    this.setState({
      remainingChars: (maxChars - event.target.value.length)
    })
  }

  handleChange = (event) => {
    this.setState({
      tweetText: event.target.value
    })
    this.updateRemainingChars(event)
  }


} // end of class

export default TwitterMessage;
