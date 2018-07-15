import React, { Component } from 'react';

class TodoEditor extends Component {
  render() {
    return (
      <div>
        <p>Todo Editor</p>
        <p>ID={this.props.id}</p>
        <p>Content={this.props.content}</p>
      </div>
    )
  }
}

export default TodoEditor;

