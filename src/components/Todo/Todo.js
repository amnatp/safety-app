import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "./List";
/*
function Todo() {
	return <p>Automatic</p>;
}
*/

class Todo extends Component {
	state = {
		task: "",
		tasks: []
	};
	handleOnSubmit = event => {
		console.log(this.state.task);
		this.setState({
			task: "",
			tasks: [
				...this.state.tasks,
				{
					id: ++this.state.tasks.length,
					task: this.state.task
				}
			]
		});
		event.preventDefault();
	};
	handleOnChange = event => {
		this.setState({
			task: event.target.value
		});
	};
	removeTask = id => {
		const remainItems = this.state.tasks.filter(item => {
			return item.id !== id;
		});
		this.setState({
			tasks: remainItems
		});
	};
	render() {
		return (
			<div>
				<p>New To-Do item</p>
				<form onSubmit={this.handleOnSubmit}>
					<input
						type="text"
						value={this.state.task}
						onChange={this.handleOnChange}
					/>
					<button>Add</button>
				</form>
				<List
					tasks={this.state.tasks}
					removeTask={this.removeTask}
				/>
			</div>
		);
	}
}
/*
Todo.propTypes = {
	message: PropTypes.number.isRequired
};
*/
export default Todo;
