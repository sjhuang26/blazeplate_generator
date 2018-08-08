import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Loader from '../components/Loader';
import <%- schema.class_name %>Preview from './<%- schema.class_name %>Preview';

class <%- schema.class_name %>List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      loading: false
    }
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.updateCollection();
  }

  updateCollection() {
    this.setState({ loading: true })
    axios.get('/api/<%- schema.identifier_plural %>')
      .then((response) => {
        this.setState({
          collection: response.data,
          loading: false
        })
      })
  }

  deleteItem(id) {
    axios.delete('/api/<%- schema.identifier_plural %>/' + id)
      .then(() => {
        this.updateCollection();
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>
              <%= schema.label_plural %>
            </h2>
          </div>

          <div className="col-md-4 text-right">
            <Link className="btn btn-outline-success" to="/<%- schema.identifier_plural %>/new">
              <i className="fa fa-fw fa-plus mr-2"></i>
              New <%- schema.label %>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Loader isLoaded={!this.state.loading}>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <%_ for (let attr of schema.attributes) { _%>
                    <%_ if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'OWNS_MANY') continue _%>
                    <%_ if (attr.help) { _%>
                    <th>
                      <%= attr.label %>
                      <i className="fa fa-fw fa-question-circle-o"></i>
                      { /* TODO tooltip on bottom attr.help */ }
                    </th>
                    <%_ } else { _%>
                    <th><%= attr.label %></th>
                    <%_ } _%>
                    <%_ } _%>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (this.state.collection.length === 0) ? (
                      <tr className="tr-warning">
                        <%_ for (index in schema.attributes) { _%>
                        <%_ if (index === '0') { _%>
                        <td>Empty</td>
                        <%_ } else { _%>
                        <td></td>
                        <%_ } _%>
                        <%_ } _%>
                        <td></td>
                      </tr>
                    ) : (
                      this.state.collection.map((model) => {
                        return <<%- schema.class_name %>Preview model={model} onDeleteItem={this.deleteItem} key={model._id} />
                      })
                    )
                  }
                </tbody>
              </table>
            </Loader>
          </div>
        </div>
      </div>
    )
  }
}

export default <%- schema.class_name %>List;
