import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class <%- schema.class_name %>List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    axios.get('/api/<%- schema.identifier_plural %>')
    .then((response) => {
      this.setState({
        collection: response.data,
        loading: false
      })
    })
  }
  render() {

    let content
    if (this.state.loading) {
      content = <i className='fa fa-3x fa-spin fa-spinner'></i>;
    } else {
      content = <pre className='bg-dark text-light'>{this.state.content}</pre>
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2><%- schema.label_plural %></h2>
            <Link className="btn btn-primary" to="/<%- schema.label_plural %>/new">
              New <%- schema.label %>
            </Link>
            <hr/>
            {content}
          </div>
        </div>
      </div>
    )
  }
}

export default <%- schema.class_name %>List;

