import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className='app-container'>
        <div className='content'>
          <div className='title'>
            Find your soulmate.
          </div>
          <div className='tagline'>
            Looking for love this Valentine's Day?
          </div>
        </div>
      </div>
    );
  }
}
