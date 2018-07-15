import React, { Component } from 'react';
import TodoEditor from './todo-editor';
import axios from 'axios';

class TodoEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Loading...'
    }
  }

  componentDidMount() {
    axios.put('/api/todos/' + this.props.match.params.id).then((response) => {
      this.setState({
        content: JSON.stringify(response)
      })
    })
  }

  render() {
    return (
      <TodoEditor id={this.props.match.params.id} content={this.state.content} />
    )
  }
}

export default TodoEdit;

