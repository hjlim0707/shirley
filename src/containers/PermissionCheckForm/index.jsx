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
        <div className='form-container col-10 col-md-8'>
          <div className='nike-icon' />
          <form onSubmit={this.onSubmit}>
            <label htmlFor='password'>
              Please enter the password to view Nike Run app work.
            </label>
            <input
              type='password'
              placeholder='enter password'
              className={`col-12 ${this.state.hasError ? 'error' : null}`}
              onChange={this.onChange}
            />
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
