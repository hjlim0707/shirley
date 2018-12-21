import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Link from '../link';

import Styles from './styles.scss';

const FullHeaderContent = () => (
  <div className='home-header container-fluid full'>
    <div className='header-flex'>
      <div className='header-description'>
        <a className='name' onClick={() => window.scrollTo(0,0)}>Shirley Huong </a> is a digital product designer based in Brooklyn, NYC.
      </div>
      <div className='ctas'>
        <Link text='Email' href='mailto:huongshirley@gmail.com'/>
        <Link text='Resume' target='_blank' href='../../assets/Shirley_Huong_Resume.pdf' />
        <Link text='IG' target='_blank' href='http://www.instagram.com/shirleyisfishing'/>
      </div>
    </div>
  </div>
);

export const CondensedHeaderContent = ({ style }) => (
  <div className='home-header container-fluid condensed' style={style}>
    <div className='header-flex'>
      <div className='header-description'>
        <a
          className='name'
          onClick={() => {
            window.scrollTo(0,0);
            if(window.location.pathname !== '/') {
              window.location = '/';
            }
          }}
        >
        Shirley Huong
        </a>
      </div>
      <div className='ctas condensed'>
        <Link text='Email' href='mailto:huongshirley@gmail.com'/>
        <Link text='Resume' target='_blank' href='../../assets/Shirley_Huong_Resume.pdf' />
        <Link text='IG' target='_blank' href='http://www.instagram.com/shirleyisfishing'/>
      </div>
    </div>
  </div>
);

export default class HomeHeader extends React.PureComponent {
  state = {
    leftContent: 'full',
  };

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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
     return this.state.leftContent === 'full' ? <FullHeaderContent /> : <CondensedHeaderContent {...this.props} />;
   }
}
