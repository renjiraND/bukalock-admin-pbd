import React, { Component } from 'react';
import './App.css';
import fire from './Firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.ref = fire.ref('users');
    this.ref_rfid = fire.ref('rfid');
    this.state = {
        email:'',
        rfid:'',
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
              placeholder="input a valid gmail here"
              onChange={this.handleChange} />
            <button type="button" class="btn btn-primary" onClick={this.handleClick}>Add User</button>
          </div>

          <div class="form-group container card text-dark p-5">
            <label htmlFor="rfid" className="text-left">Input RFID-Tag</label>
            <hr/>
            <input 
              type="rfid" 
              className="form-control my-2" 
              name="rfid"
              value={this.state.rfid}u
              placeholder="input a valid RFID-Tag here"
              onChange={this.handleChange} />
            <button type="button" class="btn btn-primary" onClick={this.handleClickRFID}>Add RFID-Tag</button>
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

  handleClickRFID = (e) => {
    e.preventDefault();
    const rfid_tag = {
      rfid:this.state.rfid
    }
    this.ref_rfid.push(rfid_tag);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }

}

export default App;