// time-picker

import React, { Component } from 'react';
import TimePicker from 'react-time-picker';

class Time extends Component {
	state = {
		start: '19:00',
		end: '21:00',
	}

	onChange = time => this.setState({ time })

	render() {
		return (
			<div className="time-selector">
				<div>Start time
					<TimePicker
						onChange={this.onChange}
						value={this.state.start}
					/>
				</div>
				<div>End time
					<TimePicker
						onChange={this.onChange}
						value={this.state.end}
					/>
				</div>
			</div>
		);
	}
}

export default Time;
