import React, { Component } from 'react';
import '../../flex.scss';
import './EditTodoForm.scss';

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
			<div className="flex-container edit-todo">
				<form onSubmit={this.handleSubmit} style={{ flexGrow: 8 }}>
					<input
						name="currentText"
						value={this.state.currentText}
						onChange={this.handleChange}
						className="edit-todo-input"
						autoFocus
					></input>
					{/* <button id="complete-button">Submit</button> */}
				</form>
				<button onClick={this.props.cancelEditing} id="cancel-button">
					X
				</button>
			</div>
		);
	}
}

export default EditTodoForm;
