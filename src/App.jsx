import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import CaseDetail from './containers/CaseDetail';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <section className="main">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:detail" component={CaseDetail}/>
        </Switch>
      </section>
    )
  }
}
