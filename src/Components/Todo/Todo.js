import React, { Component } from 'react';
import './Todo.scss';
import EditTodoForm from '../EditTodoForm/EditTodoForm';
import '../../flex.scss';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			isCompleted: false,
			deleteTodoAnimation: '',
			addTodoAnimation: 'addAnimation',
		};
	}

	handleClick = () => {
		this.setState({ deleteTodoAnimation: 'deleteAnimation', addTodoAnimation: '' });

		setTimeout(() => {
			this.props.removeTodo(this.props.id);
			this.setState({ deleteTodoAnimation: '' });
		}, 1450);
	};

	switchEditing = () => {
		this.setState({
			isEditing: !this.state.isEditing,
			addTodoAnimation: '',
		});
	};

	setRenderAfterEditing = () => {};

	setCompleted = () => {
		this.setState({ isCompleted: !this.state.isCompleted });
	};

	render() {
		const { text } = this.props;

		if (!this.state.isEditing) {
			return (
				<div
					className={`todo flex-container ${this.state.deleteTodoAnimation} ${this.state.addTodoAnimation}`}
				>
					<span className={this.state.isCompleted ? 'checkboxTicked' : 'checkbox'}>
						{this.state.isCompleted ? <FontAwesomeIcon icon={faCheck} /> : null}
					</span>
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
						) : (
							<button id="disabled-edit-button" disabled>
								<FontAwesomeIcon icon={faEdit} />
							</button>
						)}
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
					setRenderAfterEditing={this.setRenderAfterEditing}
				/>
			);
		}
	}
}

export default Todo;
