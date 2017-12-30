import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Link from '../link';

import Styles from './styles.scss';

export default class DetailHeader extends React.PureComponent {
  state = {
    content: 'full',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  onClick = () => {
    window.scrollTo(0,0);
  }

  handleScroll = () => {
    if (window.pageYOffset <= 0) {
      this.setState({content: 'full'});
      if (window.innerWidth >= 576 && window.innerWidth < 768) {
        document.querySelector('.detail-header .title').classList.remove('col-sm-10');
        document.querySelector('.detail-header .right-cta').classList.remove('col-sm-2');
      }
      if (window.innerWidth > 480) {
        document.querySelector('.detail-header .title').style.fontSize = '48px';
      } else {
        document.querySelector('.detail-header .title').style.fontSize = '28px';
      }
    } else {
      this.setState({content: 'condensed'});
      if (window.innerWidth >= 576 && window.innerWidth < 768) {
        document.querySelector('.detail-header .title').classList.add('col-sm-10');
        document.querySelector('.detail-header .right-cta').classList.add('col-sm-2');
      }
      document.querySelector('.detail-header .title').style.fontSize = '18px';
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className={`detail-header container-fluid ${this.state.content}`}>
        <div className='row'>
          <a className='col-12 col-md-10 title' onClick={this.onClick}>
            {this.props.title}
          </a>
          <div className='col-1 col-md-2 right-cta'>
            <Link text='Work' href='/'/>
          </div>
        </div>
      </div>
    );
  }
}
