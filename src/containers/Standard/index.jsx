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
                  text="One of the most frustrating parts of painting a room is finding the right color. Standard is my vision for a new type of paint container that aims to make that process easier. By making the container transparent, users can see the actual paint color without having to guess or paint a test patch on a wall. The triangular shape of the container allows paint to be shipped more economically."
                />
              </div>
              <div className='col-12 col-md-6'>
                <Description
                  title='My Role'
                  text='Designer'
                />
                <Description
                  title='Time'
                  text='05/2015'
                />
                <Description
                  title='Credit'
                  text='Instructors — Nic Taylor, Brett Kilroe'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-9'>
                <img className='gd' src='../../assets/NSC/1_Fortune.jpg'/>
                <img className='gd' src='../../assets/NSC/2_Fortune.jpg'/>
                <img className='gd' src='../../assets/NSC/3_Fortune.jpg'/>
                <img className='gd' src='../../assets/NSC/4_Totes.jpg'/>
                <img className='gd' src='../../assets/NSC/5_Totes.jpg'/>
                <img className='gd' src='../../assets/NSC/6_Totes.jpg'/>
                <img className='gd' src='../../assets/NSC/7_Totes.jpg'/>
                <img className='gd' src='../../assets/NSC/8_Totes.jpg'/>
              </div>
            </div>
          </div>
        <DetailFooter prev={{text: 'Night Snack Club', href: 'night snack club'}} next={{text: 'Floating Chain', href: 'floating chain'}}/>
      </div>
    )
  }
}
