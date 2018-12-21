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

  hover = (e) => {
    if (e.target.id === 'chi' || e.target.classList.contains('chi')) {
      document.querySelector('.chi-icon').setAttribute('src', '../../assets/White_YingYang.svg');
    }
  }

  unhover = (e) => {
    if (e.target.id === 'chi' || e.target.classList.contains('chi')) {
      document.querySelector('.chi-icon').setAttribute('src', '../../assets/YingYang.svg');
    }
  }

  renderChiIcon() {
    return this.props.id === 'chi' ? (
      <span>
        <img className='chi-icon' src='../../assets/YingYang.svg'/>
      </span>) : null;
  }

  renderTitle() {
    return this.props.id === 'tuft' ? (
      <span className={`gd-case-title ${this.props.id}`}>
        Tuft <span className='amp'>&</span> Needle
      </span>
    ) : (<span className={`gd-case-title ${this.props.id}`}>
          {this.props.title}
        </span>
    );
  }

  render() {
    return (
      <div className='gd-case-section' id={this.props.id} onMouseOver={this.hover} onMouseLeave={this.unhover}>
        <Link className={`gd-case-link ${this.props.id}`} to={`/gd/${this.props.title}`}>
          <div className={`gd-case-content-wrapper ${this.props.id}`}>
            {this.renderTitle()}
            {this.renderChiIcon()}
            <span className={`horizontal-line ${this.props.id}`}>
              &mdash;
            </span>
            <span className={`gd-case-description ${this.props.id}`}>
              {this.props.description}
            </span>
          </div>
        </Link>
      </div>
    )
  }
}
