import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.scss';

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const newTodo = { ...this.state, id: uuidv4() };
		this.props.addTodo(newTodo);
		this.setState({ text: ' ' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type='text'
					name='text'
					value={this.state.text}
					onChange={this.handleChange}
					placeholder='new task'
				></input>
				<button id="new-todo-form-button" type='submit'>ADD</button>
			</form>
		);
	}
}

export default NewTodoForm;
