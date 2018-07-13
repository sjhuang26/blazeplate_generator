import React, { Component } from 'react';
import TodoEditor from './todo-editor';

class TodoNew extends Component {
  render() {
    return (
      <div>
        <p>New Todo</p>
        <TodoEditor id={999} />
      </div>
    )
  }
}

export default TodoNew;

