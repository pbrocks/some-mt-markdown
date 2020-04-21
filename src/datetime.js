import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class DateTime extends Component {
	constructor(props) {
		super(props)
		this.state = {
			startDate: new Date()
		};
		this.handleChange = this.handleChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	handleChange(date) {
		const timeOptions = {
			timeZone: "Canada/Eastern",
			hour12: true,
			hour: "numeric",
			minute: "numeric", seconds: "numeric"
		}
		const dateOptions = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		};
		this.setState({
			startDate: date
		});
		var format = new Date(this.state.startDate);
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		document.getElementById("show-day").innerHTML = days[format.getDay()];
		// document.getElementById("show-number").innerHTML = format.getDate();
		document.getElementById("show-number").innerHTML = format.toLocaleDateString("en-US", dateOptions);
		// document.getElementById("show-here").innerHTML = format.toJSON();
		document.getElementById("show-here").innerHTML = format.toLocaleDateString("en-US", timeOptions);
	}

	onFormSubmit(e) {
		e.preventDefault();
		console.log(this.state.startDate)
	}

	render() {
		return (
			<section>
				<div className="grid-wrapper">
					<div className="item1 centered">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/datetime.js</code> and save to reload.
						</p>
						<p>Show here</p>
						<p id="show-day">show-day</p>
						<p id="show-number">show-number</p>
						<p id="show-here">show-here</p>
					</div>
					<div className="item1 centered">
						<form onSubmit={this.onFormSubmit}>
							<div className="form-group">
								<div className="item4">
									<DatePicker
										selected={this.state.startDate}
										onChange={this.handleChange}
										name="startDate"
										dateFormat="MM/dd/yyyy"
									/>&nbsp;
									<button className="btn btn-primary">Show Date</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		);
	}

}

export default DateTime;