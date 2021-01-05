import React, { Component } from 'react';
import '../../flex.scss';

class EditTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentText: this.props.currentText,
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.updateTodo(this.props.todoId, this.state.currentText);
		this.props.cancelEditing();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						name='currentText'
						value={this.state.currentText}
						onChange={this.handleChange}
					></input>
					<button>Submit</button>
				</form>
				<button onClick={this.props.cancelEditing}>Cancel</button>
			</div>
		);
	}
}

export default EditTodoForm;
