import React from 'react';
import ReactDOM from 'react-dom';
import HomeHeader from '../../components/home_header';
import ProductCaseSection from '../../components/product_case_section';
import GDCaseSection from '../../components/gd_case_section';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className='home-container'>
        <HomeHeader />
        <ProductCaseSection
        id='run-club'
        title='run club'
        description='Music redesign within the Nike run club app.'
        />
        <ProductCaseSection
        id='post'
        title='post'
        description='Reimagining invites through design and technology.'
        />
        <ProductCaseSection
          title='flyer'
          description='An event planning app for casual get togethers.'
        />
        <ProductCaseSection
          id='nike'
          title='linkNYC'
          description='Technology to improve your running form.'
        />
        <ProductCaseSection
        title='mizu'
        description='A meditation mood music app that helps you relax.'
        />
        <GDCaseSection
          id='tuft'
          title='tuft & needle'
          description='A mattress company disrupting sleep.'
        />
        <GDCaseSection
          id='chi'
          title='chi'
          description='A mail order catalog based on feng shui.'
        />
        <GDCaseSection
          title='night snack club'
          description='Self-initiated projects.'
        />
        <GDCaseSection
          title='standard'
          description='Reimagining paint containers with a new identity.'
        />
        {/*<GDCaseSection
          title='floating chain'
          description="Invitations for Jonah Freeman & Justin Lowe's art exhibition."
        />*/}
      </div>
    );
  }
}
