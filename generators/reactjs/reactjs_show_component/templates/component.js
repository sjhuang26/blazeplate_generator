import React, { Component } from 'react';
import axios from 'axios';

class <%- schema.class_name %>Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Loading...'
    }
  }

  componentDidMount() {
    axios.get('/api/<%- schema.identifier_plural %>/' + this.props.match.params.id).then((response) => {
      this.setState({
        content: JSON.stringify(response)
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Show component</h2>
        <p>ID={this.props.match.params.id}</p>
        <p>Content={this.state.content}</p>
      </div>
    )
  }
}

export default <%- schema.class_name %>Show;

