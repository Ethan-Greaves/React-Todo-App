import React, { Component } from "react";
import "./Todo.scss";

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
  render() {
    const { text } = this.props;
    return (
      <div>
        {text}
        <button onClick={this.handleClick}>X</button>
        <button>Edit</button>
      </div>
    );
  }
}

export default Todo;
