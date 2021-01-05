import React, { Component } from 'react';
import './Todo.scss';
import EditTodoForm from '../EditTodoForm/EditTodoForm';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
		};
	}

	handleClick = () => {
		this.props.removeTodo(this.props.id);
	};

	switchEditing = () => {
		this.setState((prevState) => {
			return { isEditing: prevState.isEditing === false ? true : false };
		});
	};

	render() {
		const { text } = this.props;

		if (!this.state.isEditing) {
			return (
				<div>
					{text}
					<button onClick={this.handleClick}>X</button>
					<button onClick={this.switchEditing}>Edit</button>
				</div>
			);
		} else {
			return (
				<EditTodoForm
					currentText={text}
					cancelEditing={this.switchEditing}
					updateTodo={this.props.updateTodo}
					todoId={this.props.id}
				/>
			);
		}
	}
}

export default Todo;
