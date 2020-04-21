import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import DatePicker from 'react-datepicker';
import Time from './time-picker';
import ReactMarkdownEx from './react-markdown';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			startDate: new Date()
		};
		this.handleChange = this.handleChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	handleChange(date) {
		this.setState({
			startDate: date
		})
	}

	onFormSubmit(e) {
		e.preventDefault();
		console.log(this.state.startDate)
	}

	render() {
		return (
			<section>
				<div className="div-wrapper">
					<div className="grid-full-wh centered">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
					</div>
					<div className="grid-full-wh centered">
						<form onSubmit={this.onFormSubmit}>
							<div className="form-group">
								<ReactMarkdownEx />
								<div className="grid-full-tr">
									<Time />
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		);
	}

}

export default App;