import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hello world!</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/todos" component={({ match }) =>
              <p>List</p>
            } />
            <Route exact path="/todos/new" component={() =>
              <p>New</p>
            } />
            <Route exact path="/todos/:id" component={({ match }) =>
              <p>Show id={match.params.id}</p>
            } />
            <Route exact path="/todos/:id/edit" component={({ match }) =>
              <p>Edit id={match.params.id}</p>
            } />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;

