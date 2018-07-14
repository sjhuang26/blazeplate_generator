import React, { Component } from 'react';

class TodoShow extends Component {
  render() {
    return (
      <div>
        <p>Show Todo</p>
        <p>ID={this.props.match.params.id}</p>
      </div>
    )
  }
}

export default TodoShow;

