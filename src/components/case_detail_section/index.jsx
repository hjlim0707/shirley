import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Styles from './styles.scss';

const CaseDetailSection = (props) => {
  return (
    <div className='case-detail-section' id={props.id}>
      <Link className='case-detail-link' to={props.title}>
        <span className='case-detail-title'>
          {props.title}
        </span>
        <span> - </span>
        <span className='case-detail-description'>
          {props.description}
        </span>
      </Link>
    </div>
  )
}

CaseDetailSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default CaseDetailSection;
