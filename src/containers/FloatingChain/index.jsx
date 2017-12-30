import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import DetailFooter from '../../components/detail_footer';
import Description from '../../components/description';

export default class FloatingChain extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Floating Chain' />
          <div className='product-detail-content'>
            <div className='first-row row'>
              <div className='col-12 col-md-6'>
                <Description
                  title='The Project'
                  className='top'
                  text="Floating Chain is Jonah Freeman and Justin Lowe's latest exhibition at Marlborough Chelsea Gallery. Both have created a whole new world: half labyrinth, half initiative path. The exhibition encapsulates different times inspired from the 60's, 70's and spaces, some intertwined. A plastic bag designed to be a utilitarian item captures the very essence of the duo's personality."
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
                  text='03/2015'
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
                <img className='gd' src='../../assets/FloatingChain/1_bag.jpg'/>
                <img className='gd' src='../../assets/FloatingChain/2_bag.jpg'/>
                <img className='gd' src='../../assets/FloatingChain/3_model.jpg'/>
                <img className='gd' src='../../assets/FloatingChain/4_model.jpg'/>
                <img className='gd last' src='../../assets/FloatingChain/5_PlasticBag.gif'/>
              </div>
            </div>
        </div>
        <DetailFooter prev={{href: 'standard'}} next={{href: '/product/post'}}/>
      </div>
    )
  }
}
