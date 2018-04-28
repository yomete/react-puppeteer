import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
	super(props);
	this.state = {
	  fullname: '',
	  email: '',
	  message: '',
	  terms: false,
	  test: ''

	}

	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
	const target = event.target;
	const value = target.type === "checkbox" ? target.checked : target.value;
	const name = target.name;

	this.setState({
	  [name]: value
	});
  }

  handleSubmit(event) {
	event.preventDefault();
	console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="container contact-form m-t-20">

          <p>Contact Form</p>
		  <form onSubmit={this.handleSubmit}>
            <div className="field">
			  <div className="control">
				<label className="label">Full Name</label>
				<input name="fullname" type="text" placeholder="Full Name" className="input" value={this.state.fullname} onChange={this.handleChange}/>
			  </div>
            </div>

			<div className="field">
			  <div className="control">
				<label className="label">Email Address</label>
				<input name="email" type="email" placeholder="Email Address" className="input" value={this.state.email} onChange={this.handleChange}/>
			  </div>
            </div>

			<div className="field">
			  <div className="control">
				<label className="label">Message</label>
				<textarea className="textarea" placeholder="Message here" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
			  </div>
            </div>

			<div className="field">
			  <div className="control">
				<label className="checkbox">
				  <input
					name="terms"
					type="checkbox"
					checked={this.state.terms}
					onChange={this.handleChange}
				  />
				  I agree to the{" "}
				  <a href="https://google.com">terms and conditions</a>
				</label>
			  </div>
			</div>

			<div className="field">
			  <div className="control">
				<label className="label">
				  Do you test your React code?
				</label>
				<label className="radio">
				  <input
					type="radio"
					name="test"
					onChange={this.handleChange}
					value="Yes"
					checked={this.state.test === "Yes"}
				  />
				  Yes
				</label>
				<label className="radio">
				  <input
					type="radio"
					name="test"
					onChange={this.handleChange}
					value="No"
					checked={this.state.test === "No"}
				  />
				  No
				</label>
			  </div>
			</div>

			<div className="field">
			  <div className="control">
				<button type="submit" className="button is-link">Submit</button>
			  </div>
			</div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
