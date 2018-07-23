import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './home';
<%_ for (let schema of appSchema.schemas) { _%>
import <%- schema.class_name %>Routes from './<%- schema.class_name %>Routes';
<%_ } _%>

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <Link className="navbar-brand" to="/"><%= appSchema.label %></Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <%_ for (let schema of appSchema.schemas) { _%>
              <li className="nav-item">
                <Link className="nav-link" to="/<%= schema.identifier_plural %>"><%= schema.label_plural %></Link>
              </li>
              <%_ } _%>
            </ul>
          </div>
        </nav>

        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <%_ for (let schema of appSchema.schemas) { _%>
            <Route path="/<%- schema.identifier_plural %>" component={<%- schema.class_name %>Routes} />
            <%_ } _%>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;

