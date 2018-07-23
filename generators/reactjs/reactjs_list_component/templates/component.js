import React, { Component } from 'react';
import axios from 'axios';

class <%- schema.class_name %>List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Loading...'
    }
  }

  componentDidMount() {
    axios.get('/api/<%- schema.identifier_plural %>').then((response) => {
      this.setState({
        content: JSON.stringify(response)
      })
    })
  }
  render() {
    return (
      <div>
        <h2>List component</h2>
        <p>{this.state.content}</p>
      </div>
    )
  }
}

export default <%- schema.class_name %>List;

