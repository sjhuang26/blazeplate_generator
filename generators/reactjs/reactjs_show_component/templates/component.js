import React, { Component } from 'react';
import axios from 'axios';

class <%- schema.class_name %>Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      model: ''
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    axios.get('/api/<%- schema.identifier_plural %>/' + this.props.match.params.id)
    .then((response) => {
      this.setState({
        loading: false,
        model: JSON.stringify(response.data, null, 2)
      })
    })
  }

  render() {

    let content

    // Show loading view
    if (this.state.loading) {
      content = <i className='fa fa-3x fa-spin fa-spinner'></i>;
    // Show collection
    } else {
      content = <pre className='bg-dark text-light'>{this.state.model}</pre>
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2>Show <%- schema.label %></h2>
            <p>ID={this.props.match.params.id}</p>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default <%- schema.class_name %>Show;

