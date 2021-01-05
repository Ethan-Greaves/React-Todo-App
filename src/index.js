import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './Components/TodoList/TodoList';
import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    document.body.classList.add('background');

    return ( < TodoList/> );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
