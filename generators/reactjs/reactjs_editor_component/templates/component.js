import React, { Component } from 'react';

class <%- schema.class_name %>Editor extends Component {
  render() {
    return (
      <div>
        <p>Item Editor</p>
        <p>ID={this.props.id}</p>
        <p>Content={this.props.content}</p>
      </div>
    )
  }
}

export default <%- schema.class_name %>Editor;

