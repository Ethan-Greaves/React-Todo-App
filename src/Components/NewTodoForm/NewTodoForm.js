import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const newTodo = { ...this.state, id: uuidv4() };
		this.props.addTodo(newTodo);
		this.setState({ text: ' ' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name='text' value={this.state.text} onChange={this.handleChange}></input>
				<button>Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;
