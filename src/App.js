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
          <div className="form-group container card text-dark p-5 container">
            <div className="h2">Input User Data</div>
            
            <div className="row">
              <label htmlFor="email" className="text-right mt-3 h5 col-3">E-mail</label>
              <input 
                type="email" 
                className="form-control my-2 col pr-3" 
                name="email"
                value={this.state.email}
                placeholder="input a valid gmail here"
                onChange={this.handleChange} />
            </div>
            <div className="row">            
              <label htmlFor="rfid" className="text-right mt-3 h5 col-3">RFID-Tag</label>
              <hr/>
              <input 
                type="rfid" 
                className="form-control my-2 col pr-3" 
                name="rfid"
                value={this.state.rfid}u
                placeholder="input a valid RFID-Tag here"
                onChange={this.handleChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit User</button>
          </div>

        </header>
      </div>
    );
  }

  handleClick = (e) => {
    e.preventDefault();
    const user = {
      email:this.state.email,
      rfid:this.state.rfid
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