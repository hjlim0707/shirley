import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import NavBar from './components/navbar/index';

import Home from './containers/home/index';

// import './App.scss';

export default class App extends Component {
  render() {
    return (
      <section className="main">
        <header>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </section>
    )
  }
}
