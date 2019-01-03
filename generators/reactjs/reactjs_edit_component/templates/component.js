import React, { Component } from 'react';
import <%- schema.class_name %>Editor from './<%- schema.class_name %>Editor';
import axios from 'axios';

class <%- schema.class_name %>Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Loading...'
    }
  }

  componentDidMount() {
    axios.put('/api/<%- schema.identifier_plural %>/' + this.props.match.params.id).then((response) => {
      this.setState({
        content: JSON.stringify(response)
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Edit component</h2>
        <<%- schema.class_name %>Editor id={this.props.match.params.id} content={this.state.content} />
      </div>
    )
  }
}

export default <%- schema.class_name %>Edit;

