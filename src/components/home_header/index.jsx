import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Link from '../link';

import Styles from './styles.scss';

export default class HomeHeader extends React.PureComponent {
  state = {
    leftContent: 'full',
  };

  leftContent() {
    return this.state.leftContent === 'full' ? (
      <div className='header-description col-12 col-lg-8 col-xl-9'>
        <a className='name' onClick={this.onClick}>Shirley Huong </a>
        is a product designer based in <br/>
        Brooklyn, NYC. She currently works at <br/>
        <Link text='Paperless Post' href='https://www.paperlesspost.com' />,
        focusing on Mobile Products.
      </div>
    ) : (
      <div className='header-description col-12 col-lg-8 col-xl-9'>
        <a className='name' onClick={this.onClick}>Shirley Huong</a>
      </div>
    )
  }

  onClick = () => {
    window.scrollTo(0,0);
  }

  handleScroll = () => {
    window.pageYOffset === 0 ? this.setState({ leftContent: 'full' }) : this.setState({ leftContent: 'condensed' });
    const headerHeight = document.querySelector('.home-header').offsetHeight;
    document.querySelector('#post').style['marginTop'] = `${headerHeight}px`;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const headerHeight = document.querySelector('.home-header').offsetHeight;
    document.querySelector('#post').style['marginTop'] =`${headerHeight}px`;
  }

  render() {
    return (
      <div className='home-header container-fluid'>
        <div className='row'>
          {this.leftContent()}
          <div className='ctas col-12 col-lg-4 col-xl-3'>
            <Link text='Email' href='mailto:huongshirley@gmail.com'/>
            <Link text='Resume' href='../../assets/Shirley_Huong_Resume.pdf' />
            <Link text='IG' href='http://www.instagram.com'/>
          </div>
        </div>
      </div>
    );
  }
}
