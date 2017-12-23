import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import DetailFooter from '../../components/detail_footer';
import Description from '../../components/description';

import Styles from './styles.scss';

export default class Chi extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Chi' />
        <div className='first-row row'>
          <div className='col-6'>
            <Description
              title='The Project'
              text="This mail order catalog is based on the beliefs of Feng Shui. Chi is energy. It is the constant moving life force that makes us feel good or bad in a certain environment. This energy accumulates in the objects around you. The following items will create a feng shui that will invite, excite and calm. Gift yourself with chi to assure your good health and fortune."
            />
          </div>
          <div className='col-6'>
            <Description
              title='My Role'
              text='Designer'
            />
            <Description
              title='Time'
              text='08/2017'
            />
            <Description
              title='Credit'
              text='Instructor — Scott Buschkuhl'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <img className='tnn' src='../../assets/Chi/1_Cover.jpg'/>
            <img className='tnn' src='../../assets/Chi/2_Cover.jpg'/>
            <img className='tnn' src='../../assets/Chi/3_Spread.jpg'/>
            <img className='tnn' src='../../assets/Chi/4_Spread.jpg'/>
            <img className='tnn' src='../../assets/Chi/5_Spread.jpg'/>
            <img className='tnn' src='../../assets/Chi/6_Spread.jpg'/>
            <img className='tnn' src='../../assets/Chi/7_Spread.jpg'/>
            <img className='tnn' src='../../assets/Chi/8_Spread.jpg'/>
            <img className='tnn' src='../../assets/Chi/9_Spread.jpg'/>
            <img className='tnn' src='../../assets/Chi/10_Spread.jpg'/>
            <img className='tnn' src='../../assets/Chi/11_Spread.jpg'/>
          </div>
        </div>
        <DetailFooter prev={{text: 'Tuft and Needle', href: 'tuft & needle'}} next={{text: 'Nightsnack Club', href: 'night snack club'}}/>
      </div>
    )
  }
}
