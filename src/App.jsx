import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Post from './containers/Post';
import Flyer from './containers/Flyer';
import LinkNYC from './containers/LinkNYC';
import Mizu from './containers/Mizu';
import TuftAndNeedle from './containers/TuftAndNeedle';
import Chi from './containers/Chi';
import NightSnackClub from './containers/NightSnackClub';
import Standard from './containers/Standard';
import FloatingChain from './containers/FloatingChain';
import PermissionCheckForm from './containers/PermissionCheckForm';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <section className="main">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/product/run club" component={PermissionCheckForm}/>
          <Route path="/product/post" component={Post}/>
          <Route path="/product/flyer" component={Flyer}/>
          <Route path="/product/linkNYC" component={LinkNYC}/>
          <Route path="/product/mizu" component={Mizu}/>
          <Route path="/gd/tuft & needle" component={TuftAndNeedle}/>
          <Route path="/gd/chi" component={Chi}/>
          <Route path="/gd/night snack club" component={NightSnackClub}/>
          <Route path="/gd/standard" component={Standard}/>
          <Route path="/gd/floating chain" component={FloatingChain}/>
        </Switch>
      </section>
    )
  }
}
