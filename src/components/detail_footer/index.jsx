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
            <div className='link'>
              <span className='arrow left-arrow'>&larr;</span>
              <Link className='prev' text='Previous' href={this.props.prev.href}/>
            </div>
          </div>
          <div className='right-cta col-6'>
            <div className='link'>
              <Link className='next' text='Next' href={this.props.next.href}/>
              <span className='arrow right-arrow'>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
