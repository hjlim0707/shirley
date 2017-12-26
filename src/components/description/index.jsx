import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Styles from './styles.scss';

export default class Description extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  renderFormattedText() {
    const textContent = this.props.text.split('<br/>');
    if(textContent.length > 1) {
      return (
        <div className='description-text'>
          {textContent.map((text, index) => {
            if(index !== textContent.length - 1) {
              return (
            <div key={index}>
              {text}
              <br/>
            </div>
          )}
          return <div>{text}</div>;
          }
          )}
        </div>
      )
    }
    return this.props.text;
  }

  render() {
    return (
      <div className={`description ${this.props.className ? this.props.className : ''}`}>
        <div className='description-title'>
          {this.props.title}
        </div>
        <div className='description-text'>
          {this.renderFormattedText()}
        </div>
      </div>
    );
  }
}
