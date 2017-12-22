import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Styles from './styles.scss';

export default class Description extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className='description'>
        <div className='description-title'>
          {this.props.title}
        </div>
        <div className='description-text'>
          {this.props.text}
        </div>
      </div>
    );
  }
}
