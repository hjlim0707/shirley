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
      <div className='header-description col-11 col-md-10 col-lg-5'>
        <a className='name' onClick={this.onClick}>Shirley Huong </a> is a digital product designer based in Brooklyn, NYC.
      </div>
    ) : (
      <div className='header-description col-12 col-md-4 col-lg-5'>
        <a className='name' onClick={this.onClick}>Shirley Huong</a>
      </div>
    )
  }

  onClick = () => {
    window.scrollTo(0,0);
  }

  setHeaderOffset() {
    const headerHeight = document.querySelector('.home-header').offsetHeight;
    document.querySelector('#run-club').style['marginTop'] = `${headerHeight}px`;
  }

  handleScroll = () => {
    window.pageYOffset <= 0 ? this.setState({ leftContent: 'full' }) : this.setState({ leftContent: 'condensed' });
    this.setHeaderOffset();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setHeaderOffset();
  }

  render() {
    return (
      <div className={`home-header container-fluid ${this.state.leftContent}`}>
        <div className='row'>
          {this.leftContent()}
          <div className={`ctas col-12 col-lg-5 ${this.state.leftContent === 'full' ? 'offset-lg-2' : 'col-md-6 offset-md-2 offset-lg-2 condensed'}`}>
            <Link text='Email' href='mailto:huongshirley@gmail.com'/>
            <Link text='Resume' href='../../assets/Shirley_Huong_Resume.pdf' />
            <Link text='IG' href='http://www.instagram.com/shirleyisfishing'/>
          </div>
        </div>
      </div>
    );
  }
}
