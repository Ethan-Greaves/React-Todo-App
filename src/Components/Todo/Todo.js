import React, { Component } from 'react';
import './Todo.scss';
import EditTodoForm from '../EditTodoForm/EditTodoForm';
import '../../flex.scss';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			isCompleted: false,
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

	setCompleted = () => {
		this.setState({ isCompleted: !this.state.isCompleted });
	};

	render() {
		const { text } = this.props;

		if (!this.state.isEditing) {
			return (
				<div className="todo flex-container">
					<p
						style={{ flexGrow: 8 }}
						className={this.state.isCompleted ? 'crossedOff' : null}
						onClick={this.setCompleted}
					>
						{text}
					</p>
					<div className="todo-buttons">
						{!this.state.isCompleted ? (
							<button onClick={this.switchEditing} id="edit-button">
								<FontAwesomeIcon icon={faEdit} />
							</button>
						) : null}
						<button onClick={this.handleClick} id="remove-button">
							<FontAwesomeIcon icon={faTrashAlt} />
						</button>
					</div>
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
