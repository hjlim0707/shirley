import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Link from '../link';

import Styles from './styles.scss';

export default class DetailHeader extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  handleScroll = () => {
    return window.pageYOffset === 0 ?
      document.querySelector('.detail-header .title').style.fontSize = '3vw' :
      document.querySelector('.detail-header .title').style.fontSize = '2vw';
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className='detail-header container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-11 title'>
            {this.props.title}
          </div>
          <div className='col-1 right-cta'>
            <Link text='Work' href='/'/>
          </div>
        </div>
      </div>
    );
  }
}
