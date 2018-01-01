import React from 'react';
import ReactDOM from 'react-dom';
import ScrollToTop from './ScrollToTop.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Route path="/" component={App} />
    </ScrollToTop>
  </Router>, document.getElementById('root'));
