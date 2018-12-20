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
        <div className='product-detail-content'>
          <div className='first-row row'>
            <div className='col-12 col-md-6'>
              <Description
                title='The Project'
                className='top'
                text="Tuft & Needle is mattress company that believes sleep is an important part of life. Working closely with Grand Army, our focus for T&N's camping trip is to create bonds with team members outside of the context of their work. It’s a time to help T&N disconnect from their jobs and the rest of the world; to recharge for the year ahead."
              />
            </div>
            <div className='col-12 col-md-6'>
              <Description
                title='My Role'
                className={window.innerWidth > 767 ? 'top' : ''}
                text='Visual Designer'
              />
              <Description
                title='Time'
                text='05/2015 — 08/2015'
              />
              <Description
                title='Credit'
                className='before-pic'
                text="Creative Direction — Grand Army"
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img className='gd' src='../../assets/TuftAndNeedle/1_TnN.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/2_Design.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/3_Design.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/4_Design.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/5_Design.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/6_Design.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/7_Design.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/8_Design.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/9_Design.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/10_Design.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/11_Design.jpg'/>
              <img className='gd' src='../../assets/TuftAndNeedle/12_Design.jpg'/>
              <img className='gd last' src='../../assets/TuftAndNeedle/13_Design.jpg'/>
            </div>
          </div>
        </div>
        <DetailFooter prev={{href: '/product/mizu'}} next={{href: 'chi'}}/>
      </div>
    )
  }
}
