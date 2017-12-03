import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/header';
import CaseDetailSection from '../../components/case_detail_section';

import Styles from './styles.scss';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className='home-container'>
        <Header />
        <CaseDetailSection
          id='flyer'
          title='flyer'
          description='An event planning app for casual get togethers'
        />
        <CaseDetailSection
          title='post'
          description='Reimagining invites through design and technology'
        />
        <CaseDetailSection
          title='linkNYC'
          description='Technology to improve your running form'
        />
        <CaseDetailSection
          title='sva'
          description='An app for SVA students to access info on the go'
        />
        <CaseDetailSection
          title='mizu'
          description='A meditation mood music app that helps you relax'
        />
        <CaseDetailSection
          title='mizu'
          description='A meditation mood music app that helps you relax'
        />
        <CaseDetailSection
          title='mizu'
          description='A meditation mood music app that helps you relax'
        />
        <CaseDetailSection
          title='mizu'
          description='A meditation mood music app that helps you relax'
        />
        <CaseDetailSection
          title='mizu'
          description='A meditation mood music app that helps you relax'
        />
        <CaseDetailSection
          title='mizu'
          description='A meditation mood music app that helps you relax'
        />
      </div>
    );
  }
}
