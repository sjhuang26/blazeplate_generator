import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './home';
<% for (let schema of appSchema.schemas) { -%>
import <%- schema.class_name %>Routes from './<%- schema.class_name %>Routes';
<% } -%>

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hello world!</h1>
          <Link to="/">Home</Link>
        </header>
        <main>
          <Switch>
            <% for (let schema of appSchema.schemas) { -%>
            <Route path="/<%- schema.identifier_plural %>" component={<%- schema.class_name %>Routes} />
            <% } -%>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;

