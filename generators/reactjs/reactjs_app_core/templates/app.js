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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

          <Link class="navbar-brand" to="/"><%= appSchema.label %></Link>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <%_ for (let schema of appSchema.schemas) { _%>
              <li class="nav-item">
                <Link class="nav-link" to="/<%= schema.identifier_plural %>"><%= schema.label_plural %></Link>
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

