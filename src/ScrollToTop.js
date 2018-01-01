import { withRouter } from "react-router";
import React from 'react';
import ReactDOM from 'react-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
