import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import TodoList from './todo-list';
import TodoNew from './todo-new';
import TodoShow from './todo-show';
import TodoEdit from './todo-edit';

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
            <Route exact path="/todos" component={TodoList} />
            <Route exact path="/todos/new" component={TodoNew} />
            <Route exact path="/todos/:id" component={TodoShow} />
            <Route exact path="/todos/:id/edit" component={TodoEdit} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;

