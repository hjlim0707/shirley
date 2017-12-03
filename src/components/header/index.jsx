import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Link from '../link';

import Styles from './styles.scss';

export default class Header extends React.PureComponent {
  leftContent() {
    const windowSize = window.innerWidth;
    switch (true) {
      case (windowSize < 768):
        return null;
        break;
      case (windowSize < 1260):
        return (<div className='col-9'>Shirley Huong</div>);
        break;
      default:
        return (
          <div className='col-10'>
          Shirley Huong is a product designer based in <br/>
          Brooklyn, NYC. She currently works at <br/>
          <Link text='Paperless Post' href='https://www.paperlesspost.com' />,
          focusing on Mobile Products.
          </div>)
        break;
    }
  }
  render() {
    return (
      <div className='home-header container-fluid'>
        <div className='row'>
          {this.leftContent()}
          <div className='ctas col-2'>
            <Link text='Email' href='mailto:huongshirley@gmail.com'/>
            <Link text='Resume' href='mailto:huongshirley@gmail.com'/>
            <Link text='IG' href='http://www.instagram.com'/>
          </div>
        </div>
      </div>
    );
  }
}
