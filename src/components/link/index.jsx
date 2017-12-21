import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Styles from './styles.scss';

const Link = (props) => (
  <a className='cta' href={props.href} target='_blank'>
    {props.text}
  </a>
);

export default Link;
