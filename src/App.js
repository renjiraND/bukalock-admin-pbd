import React, { Component } from 'react';
import './App.css';
import fire from './Firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.ref = fire.ref('users');
    this.state = {
        email:'',
        validEmails : []      
    };
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="form-group container card text-dark p-5">
            <label htmlFor="email" className="text-left">Input E-mail:</label>
            <hr/>
            <input 
              type="email" 
              className="form-control my-2" 
              name="email"
              value={this.state.email}
              placeholder="input valid gmail here"
              onChange={this.handleChange} />
            <button type="button" class="btn btn-primary" onClick={this.handleClick}>Add User</button>
          </div>
        </header>
      </div>
    );
  }

  handleClick = (e) => {
    e.preventDefault();
    const user = {
      email:this.state.email
    }
    this.ref.push(user);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }

}

export default App;