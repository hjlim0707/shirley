import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Styles from './styles.scss';

export default class ProductCaseSection extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  static defaultProps = {
    id: null,
  };

  hover = (e) => {
    if (e.target.id === 'post' || e.target.classList.contains('post')) {
      document.querySelector('.pp-icon').style.background = 'url(../../assets/White_pp_logo_text.svg) no-repeat';
    } else if (e.target.id === 'nike' || e.target.classList.contains('nike')) {
      document.querySelector('.product-case-section-nike .nike-icon').style.background = 'url(../../assets/White_Nike_Logo.svg) no-repeat';
    } else if (e.target.id === 'run-club' || e.target.classList.contains('run-club')) {
      document.querySelector('.product-case-section-run-club .nike-icon').style.background = 'url(../../assets/White_Nike_Logo.svg) no-repeat';
    }
  }

  unhover = (e) => {
    if (e.target.id === 'post' || e.target.classList.contains('post')) {
      document.querySelector('.pp-icon').style.background = 'url(../../assets/pp_logo_text.svg) no-repeat';
    } else if (e.target.id === 'nike' || e.target.classList.contains('nike')) {
      document.querySelector('.product-case-section-nike .nike-icon').style.background = 'url(../../assets/Nike_Logo.svg) no-repeat';
    } else if (e.target.id === 'run-club' || e.target.classList.contains('run-club')) {
      document.querySelector('.product-case-section-run-club .nike-icon').style.background = 'url(../../assets/Nike_Logo.svg) no-repeat';
    }
  }

  renderPPIcon() {
    return (<div className='pp-icon' />);
  }

  renderNikeIcon() {
    return (<div className='nike-icon' />);
  }

  render() {
    const { id } = this.props;

    return (
      <div
        className={`product-case-section product-case-section-${id}`}
        id={this.props.id}
        onMouseOver={this.hover}
        onMouseLeave={this.unhover}
      >
        <Link className={`product-case-link ${this.props.id}`} to={`/product/${this.props.title}`}>
          <div className={`product-case-content-wrapper ${this.props.id}`}>
            {id === 'post' && this.renderPPIcon()}
            {id === 'run-club' && this.renderNikeIcon()}
            <span className={`product-case-title ${this.props.id}`}>
              {this.props.title}
            </span>
            <span className={`horizontal-line ${this.props.id}`}>
              &mdash;
            </span>
            {id === 'nike' && this.renderNikeIcon()}
            <span className={`product-case-description ${this.props.id}`}>
              {this.props.description}
            </span>
          </div>
        </Link>
      </div>
    )
  }
}
