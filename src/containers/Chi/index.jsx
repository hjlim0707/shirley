import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import DetailFooter from '../../components/detail_footer';
import Description from '../../components/description';

export default class Chi extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Chi' />
        <div className='product-detail-content'>
          <div className='first-row row'>
            <div className='col-12 col-md-6'>
              <Description
                title='The Project'
                className='top'
                text="This mail order catalog is based on the beliefs of Feng Shui. Chi is energy. It is the constant moving life force that makes us feel good or bad in a certain environment. This energy accumulates in the objects around you. The following items will create a feng shui that will invite, excite and calm. Gift yourself with chi to assure your good health and fortune."
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
                text='01/2015 - 03/2015'
              />
              <Description
                title='Credit'
                className='before-pic'
                text='Instructor — Scott Buschkuhl'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img className='gd' src='../../assets/Chi/1_Cover.jpg'/>
              <img className='gd' src='../../assets/Chi/2_Cover.jpg'/>
              <img className='gd' src='../../assets/Chi/3_Spread.jpg'/>
              <img className='gd' src='../../assets/Chi/4_Spread.jpg'/>
              <img className='gd' src='../../assets/Chi/5_Spread.jpg'/>
              <img className='gd' src='../../assets/Chi/6_Spread.jpg'/>
              <img className='gd' src='../../assets/Chi/7_Spread.jpg'/>
              <img className='gd' src='../../assets/Chi/8_Spread.jpg'/>
              <img className='gd' src='../../assets/Chi/9_Spread.jpg'/>
              <img className='gd' src='../../assets/Chi/10_Spread.jpg'/>
              <img className='gd last' src='../../assets/Chi/11_Spread.jpg'/>
            </div>
          </div>
        </div>
        <DetailFooter prev={{href: 'tuft & needle'}} next={{href: 'night snack club'}}/>
      </div>
    )
  }
}
