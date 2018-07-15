import React, { Component } from 'react';
import TodoEditor from './todo-editor';
import axios from 'axios';

class TodoNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Loading...'
    }
  }

  componentDidMount() {
    axios.post('/api/todos').then((response) => {
      this.setState({
        content: JSON.stringify(response)
      })
    })
  }

  render() {
    return (
      <TodoEditor id={999} content={this.state.content} />
    )
  }
}

export default TodoNew;

