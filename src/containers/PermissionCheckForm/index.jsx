import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import { CondensedHeaderContent } from '../../components/home_header';
import NikeRunClub from '../NikeRunClub';

import './styles.scss';

class PermissionCheckForm extends React.Component {
  state = {
    currPassword: '',
    hasError: false,
  };

  onChange = (e) => {
    this.setState({ currPassword: e.target.value, hasError: false });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.currPassword === 'Talaria') {
      sessionStorage.setItem('run-club', 'true');
      setTimeout(() => this.forceUpdate(), 500);
    } else {
      this.setState({ hasError: true });
    }
  }

  render() {
    return sessionStorage.getItem('run-club') ? <NikeRunClub /> : (
      <div className='permission-check-form'>
        <CondensedHeaderContent style={{ position: 'static' }}/>
        <div className='form-container'>
          <div className='nike-icon' />
          <div className='input-text'>
          Please enter the password to view Nike Run Club app work.
          </div>
          <form onSubmit={this.onSubmit}>
            <div className='input-container'>
              <input
                type='password'
                placeholder='enter password'
                className={`password-input ${this.state.hasError ? 'error' : ''}`}
                onChange={this.onChange}
              />
              <span className="enter-icon">↵</span>
            </div>
            {this.state.hasError ?
              <div className='error-message'>
                Please try again.
              </div>
            : null}
          </form>
        </div>
      </div>
    );
  }
};

export default withRouter(PermissionCheckForm);
