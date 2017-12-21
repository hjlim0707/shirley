import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Styles from './styles.scss';

const GDCaseSection = (props) => {
  return (
    <div className='gd-case-section' id={props.id}>
      <div className='col-md-8 offset-md-2'>
        <Link className='gd-case-link' to={props.title}>
          <span className='gd-case-title'>
            {props.title}
          </span>
          <span className='horizontal-line'/>
          <span className='gd-case-description'>
            {props.description}
          </span>
        </Link>
      </div>
    </div>
  )
}

GDCaseSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default GDCaseSection;
