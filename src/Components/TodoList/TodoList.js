import React, { Component } from 'react';
import NewTodoForm from '../NewTodoForm/NewTodoForm';
import Todo from '../Todo/Todo';
import './TodoList.scss';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
	}

	addTodo = (todo) => {
		this.setState((prevState) => {
			return { todos: [...prevState.todos, todo] };
		});
	};

	removeTodo = (todoID) => {
		this.setState((prevState) => {
			return { todos: prevState.todos.filter((todo) => todo.id !== todoID) };
		});
	};

	updateTodo = (todoID, updatedText) => {
		const updatedTodos = this.state.todos.map((todo) => {
			if (todo.id === todoID) {
				return { ...todo, text: updatedText };
			}

			return todo;
		});

		this.setState({ todos: updatedTodos });
	};

	render() {
		const todos = this.state.todos.map((todo) => (
			<Todo
				text={todo.text}
				removeTodo={this.removeTodo}
				updateTodo={this.updateTodo}
				id={todo.id}
				key={Todo.id}
			/>
		));

		return (
			<div className="todoList">
				<h2>TO-DO LIST</h2>
				<NewTodoForm addTodo={this.addTodo} />
				<span className="todos">{todos}</span>
			</div>
		);
	}
}

export default TodoList;
