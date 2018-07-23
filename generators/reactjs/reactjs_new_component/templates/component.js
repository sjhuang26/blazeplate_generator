import React, { Component } from 'react';
import <%- schema.class_name %>Editor from './<%- schema.class_name %>Editor';
import axios from 'axios';

class <%- schema.class_name %>New extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Loading...'
    }
  }

  componentDidMount() {
    axios.post('/api/<%- schema.identifier_plural %>').then((response) => {
      this.setState({
        content: JSON.stringify(response)
      })
    })
  }

  render() {
    return (
      <div>
        <h2>New component</h2>
        <<%- schema.class_name %>Editor id={999} content={this.state.content} />
      </div>
    )
  }
}

export default <%- schema.class_name %>New;

