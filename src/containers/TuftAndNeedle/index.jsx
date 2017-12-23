import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import DetailFooter from '../../components/detail_footer';
import Description from '../../components/description';

import Styles from './styles.scss';

export default class TuftAndNeedle extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Tuft and Needle' />
        <div className='first-row row'>
          <div className='col-6'>
            <Description
              title='The Project'
              text="Tuft & Needle  is mattress company that believes sleep is an important part of life. Working closely with Grand Army,  our focus for T&N's camping trip is to create bonds with team members outside of the context of their work. It’s a time to help T&N disconnect from their jobs and the rest of the world; to recharge for the year ahead."
            />
          </div>
          <div className='col-6'>
            <Description
              title='My Role'
              text='Visual Designer'
            />
            <Description
              title='Time'
              text='08/2015 — 05/2015'
            />
            <Description
              title='Credit'
              text="Creative Direction — Grand Army"
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <img className='tnn' src='../../assets/TuftAndNeedle/1_TnN.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/2_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/3_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/4_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/5_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/6_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/7_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/8_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/9_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/10_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/11_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/12_Design.jpg'/>
            <img className='tnn' src='../../assets/TuftAndNeedle/13_Design.jpg'/>
          </div>
        </div>
        <DetailFooter prev={{text: 'Mizu', href: '/product/mizu'}} next={{text: 'Chi', href: 'chi'}}/>
      </div>
    )
  }
}
