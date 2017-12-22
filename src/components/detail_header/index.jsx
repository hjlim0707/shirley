import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Link from '../link';

import Styles from './styles.scss';

export default class DetailHeader extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className='detail-header container-fluid'>
        <div className='row'>
          <div className='col-10 col-md-11 title'>
            {this.props.title}
          </div>
          <div className='col-2 col-md-1'>
            <Link text='Work' href='/'/>
          </div>
        </div>
      </div>
    );
  }
}
