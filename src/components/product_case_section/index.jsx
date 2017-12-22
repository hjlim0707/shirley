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
    id: '',
  };

  hover = (e) => {
    if (e.target.id === 'post' ) {
      document.querySelector('.pp-icon').setAttribute('src', '../../assets/White_pp_logo_text.svg');
    } else if (e.target.id === 'nike') {
      document.querySelector('.nike-icon').setAttribute('src', '../../assets/White_Nike_Logo.svg');
    }
  }

  unhover = (e) => {
    if (e.target.id === 'post' ) {
      document.querySelector('.pp-icon').setAttribute('src', '../../assets/pp_logo_text.svg');
    } else if (e.target.id === 'nike') {
      document.querySelector('.nike-icon').setAttribute('src', '../../assets/Nike_Logo.svg');
    }
  }

  renderPPIcon() {
    return this.props.id === 'post' ? (
      <span>
        <img className='pp-icon' src='../../assets/pp_logo_text.svg'/>
      </span>) : null;
  }

  renderNikeIcon() {
    return this.props.id === 'nike' ? (
      <span>
        <img className='nike-icon'src='../../assets/Nike_Logo.svg'/>
      </span>) : null;
  }

  render() {
    return (
      <div className='product-case-section' id={this.props.id} onMouseOver={this.hover} onMouseLeave={this.unhover}>
        <div className='col-md-8 offset-md-2'>
          <Link className='product-case-link' to={`/product/${this.props.title}`}>
            {this.renderPPIcon()}
            <span className='product-case-title'>
              {this.props.title}
            </span>
            <span className='horizontal-line'>
              &mdash;
            </span>
            {this.renderNikeIcon()}
            <span className='product-case-description'>
              {this.props.description}
            </span>
          </Link>
        </div>
      </div>
    )
  }
}
