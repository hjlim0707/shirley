import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Styles from './styles.scss';

export default class GDCaseSection extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  static defaultProps = {
    id: '',
  };

  renderChiIcon() {
    return this.props.id === 'chi' ? (
      <span>
        <img className='chi-icon' src='../../assets/YingYang.svg'/>
      </span>) : null;
  }

  render() {
    return (
      <div className='gd-case-section' id={this.props.id}>
        <div className='col-md-8 offset-md-2'>
          <Link className='gd-case-link' to={`/gd/${this.props.title}`}>
            <span className='gd-case-title'>
              {this.props.title}
            </span>
            {this.renderChiIcon()}
            <span className='horizontal-line'>
              &mdash;
            </span>
            <span className='gd-case-description'>
              {this.props.description}
            </span>
          </Link>
        </div>
      </div>
    )
  }
}
