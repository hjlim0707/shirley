import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Post from './containers/Post';
import Flyer from './containers/Flyer';
import LinkNYC from './containers/LinkNYC';
import Mizu from './containers/Mizu';
import TuftAndNeedle from './containers/TuftAndNeedle';
import Chi from './containers/Chi';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <section className="main">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/product/post" component={Post}/>
          <Route path="/product/flyer" component={Flyer}/>
          <Route path="/product/linkNYC" component={LinkNYC}/>
          <Route path="/product/mizu" component={Mizu}/>
          <Route path="/gd/tuft & needle" component={TuftAndNeedle}/>
          <Route path="/gd/chi" component={Chi}/>
        </Switch>
      </section>
    )
  }
}
