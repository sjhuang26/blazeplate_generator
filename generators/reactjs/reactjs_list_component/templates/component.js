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

    // Show loading view
    if (this.state.loading) {
      content = <i className='fa fa-3x fa-spin fa-spinner'></i>;
    // Show collection
    } else if (this.state.collection.length) {

      let rows = []
      for (var i = 0; i < this.state.collection.length; i++) {
          // note: we add a key prop here to allow react to uniquely identify each
          // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
          let model = this.state.collection[i]
          let showUrl = "/<%= schema.identifier_plural %>/" + model._id
          rows.push(
            <Link key={model._id} className='list-group-item' to={showUrl}>{ model.label }</Link>);
      }
      content = <ul className='list-group'>{rows}</ul>;
    // Show empty message
    } else {
      content = <ul className='list-group'><li className='list-group-item list-group-item-warning'>No <%- schema.label_plural %> available</li></ul>;
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2><%- schema.label_plural %></h2>
            <Link className="btn btn-primary" to="/<%- schema.identifier_plural %>/new">
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

