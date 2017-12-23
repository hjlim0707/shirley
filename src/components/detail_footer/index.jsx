import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Link from '../link';

import Styles from './styles.scss';

export default class DetailFooter extends React.PureComponent {
  static propTypes = {
    prev: PropTypes.object.isRequired,
    next: PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className='detail-footer container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <div className='title'>Previous</div>
            <div className='link'>
            &mdash; <Link className='prev' text={this.props.prev.text} href={this.props.prev.href}/>
            </div>
          </div>
          <div className='right-cta col-6'>
            <div className='title'>Next</div>
            <div className='link'>
            <Link className='next' text={this.props.next.text} href={this.props.next.href}/> &mdash;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
