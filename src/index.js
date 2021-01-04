import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './Components/TodoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    return ( < TodoList/> );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
