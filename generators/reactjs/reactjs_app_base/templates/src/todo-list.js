import React, { Component } from 'react';
import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Loading...'
    }
  }

  componentDidMount() {
    axios.get('/api/todos').then((response) => {
      this.setState({
        content: JSON.stringify(response)
      })
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.content}</p>
      </div>
    )
  }
}

export default TodoList;

