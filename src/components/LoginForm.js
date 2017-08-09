import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: '',
    password: ''};
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit" id="submit">Log in</button>
        </div>
      </form>
    );
  }

  handleUsernameChange = (event) => {
    this.setState({username: event.target.value})
    console.log(event.target.value)
    }



  handlePasswordChange = (event) => {
    this.setState({password: event.target.value})
    console.log(event.target.value)
  }



  handleSubmit = (event) => {
    event.preventDefault()
    if((this.state.username !== "") && (this.state.password !== "")) {
      this.setState({
        username: '',
        password: ''
      })
      console.log('submitted')
    } else {
      console.log('both fields are required')
    }

  }





} //end of class

export default LoginForm;
