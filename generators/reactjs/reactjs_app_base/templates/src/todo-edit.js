import React, { Component } from 'react';
import TodoEditor from './todo-editor';

class TodoEdit extends Component {
  render() {
    return (
      <TodoEditor id={this.props.match.params.id} />
    )
  }
}

export default TodoEdit;

