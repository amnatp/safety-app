import React, { Component } from "react";

class Timer extends Component {
	constructor() {
		super();
		this.state = {
			alert: {
				type: "",
				message: ""
			}
		};
		this.times = {
			defaultTime: 1500,
			shortBreak: 300,
			lingBreak: 900
		};
	}
	componentDidMount() {
		this.setDefaultTime();
	}
	setDefaultTime = () => {
		this.setState({
			time: this.times.defaultTime
		});
	};
	setTime = newTime => {
		this.restartInterval();
		this.setState({
			time: newTime
		});
	};
	restartInterval = () => {
		clearInterval(this.interval);
		this.interval = setInterval(this.countDown, 1000);
	};
	countDown = () => {
		if (this.state.time === 0) {
			this.setState({
				alert: { type: "buz", message: "buzzzzz" }
			});
		} else {
			this.setState({
				time: this.state.time - 1
			});
		}
	};
	setTimeForWork = () => {
		this.setState({
			alert: { type: "Work", message: "Working" }
		});
		return this.setTime(this.times.defaultTime);
	};
	render() {
		const {
			alert: { type, message },
			time
		} = this.state;
		return (
			<div className="Pomodoro">
				<div className={`alter ${type}`}>{message}</div>
				<h1>{this.state.time}</h1>
				<div>
					<button
						className="btn btn-primary"
						onClick={this.setTimeForWork}
					>
						start work
					</button>
				</div>
			</div>
		);
	}
}
export default Timer;
