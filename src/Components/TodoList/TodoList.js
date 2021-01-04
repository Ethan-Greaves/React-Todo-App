import React, { Component } from "react";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import Todo from "../Todo/Todo";
import "./TodoList.scss";

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

  render() {
    const todos = this.state.todos.map((todo) => (
      <li>
        <Todo
          text={todo.text}
          removeTodo={this.removeTodo}
          id={todo.id}
          key={Todo.id}
        />
      </li>
    ));

    return (
      <div>
        <NewTodoForm addTodo={this.addTodo} />
        <ol>{todos}</ol>
      </div>
    );
  }
}

export default TodoList;
