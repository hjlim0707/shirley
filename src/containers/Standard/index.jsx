import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import DetailFooter from '../../components/detail_footer';
import Description from '../../components/description';

export default class Standard extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Standard' />
          <div className='product-detail-content'>
            <div className='first-row row'>
              <div className='col-12 col-md-6'>
                <Description
                  title='The Project'
                  className='top'
                  text="One of the most frustrating parts of painting a room is finding the right color. Standard is my vision for a new type of paint container that aims to make that process easier. By making the container transparent, users can see the actual paint color without having to guess or paint a test patch on a wall. The triangular shape of the container allows paint to be shipped more economically."
                />
              </div>
              <div className='col-12 col-md-6'>
                <Description
                  title='My Role'
                  className={window.innerWidth > 767 ? 'top' : ''}
                  text='Designer'
                />
                <Description
                  title='Time'
                  text='03/2015 - 05/2015'
                />
                <Description
                  title='Credit'
                  className='before-pic'
                  text='Instructors — Nic Taylor, Brett Kilroe'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-10'>
                <img className='gd' src='../../assets/Standard/1_paint.jpg'/>
                <img className='gd' src='../../assets/Standard/2_paint.jpg'/>
                <img className='gd' src='../../assets/Standard/3_paint.jpg'/>
                <img className='gd' src='../../assets/Standard/4_paint.jpg'/>
                <img className='gd' src='../../assets/Standard/5_paint.jpg'/>
                <img className='gd' src='../../assets/Standard/6_process.jpg'/>
                <img className='gd' src='../../assets/Standard/7_process.jpg'/>
                <img className='gd last' src='../../assets/Standard/8_process.jpg'/>
              </div>
            </div>
          </div>
        <DetailFooter prev={{href: 'night snack club'}} next={{href: '/product/run-club'}}/>
      </div>
    )
  }
}
