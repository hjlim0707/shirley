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

  handleScroll = () => {
    if (window.pageYOffset === 0) {
      this.setState({content: 'full'});
      if (window.innerWidth > 768) {
        document.querySelector('.detail-header .title').style.fontSize = '48px'
      } else {
        document.querySelector('.detail-header .title').style.fontSize = '24px';
      }
    } else {
      this.setState({content: 'condensed'});
      if (window.innerWidth > 768) {
        document.querySelector('.detail-header .title').style.fontSize = '24px'
      } else {
        document.querySelector('.detail-header .title').style.fontSize = '18px';
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className={`detail-header container-fluid ${this.state.content}`}>
        <div className='row'>
          <div className='col-11 title'>
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
