import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import ProductCaseDetail from './containers/ProductCaseDetail';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <section className="main">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:detail" component={ProductCaseDetail}/>
        </Switch>
      </section>
    )
  }
}
