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
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;

