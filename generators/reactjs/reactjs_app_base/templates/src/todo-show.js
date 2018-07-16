import React, { Component } from 'react';
import axios from 'axios';

class TodoShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Loading...'
    }
  }

  componentDidMount() {
    axios.get('/api/todos/' + this.props.match.params.id).then((response) => {
      this.setState({
        content: JSON.stringify(response)
      })
    })
  }

  render() {
    return (
      <div>
        <p>Show Todo</p>
        <p>ID={this.props.match.params.id}</p>
        <p>Content={this.state.content}</p>
      </div>
    )
  }
}

export default TodoShow;

