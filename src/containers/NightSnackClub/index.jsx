import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import DetailFooter from '../../components/detail_footer';
import Description from '../../components/description';

export default class NightSnackClub extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Nightsnack Club' />
          <div className='product-detail-content'>
          <div className='first-row row'>
            <div className='col-12 col-md-6'>
              <Description
                title='The Project'
                text="My friend Hui and I are very interested in the dialogue of our heritage: being Asian American and growing up in the 90s. So we decided to combine the two into our very own RnB fortune cookies. We baked the cookies ourselves, experimenting with the batter and flavoring, and created our own fortunes to slip into the cookies. We also sourced, designed and produced our own packaging. The final product, we hope, is the highest epitome of corny cultural references in edible form."
              />
            </div>
            <div className='col-12 col-md-6'>
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
                text="Co-Designer — Hui Ou Yang"
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
        <DetailFooter prev={{text: 'Chi', href: 'chi'}} next={{text: 'Standard', href: 'standard'}}/>
      </div>
    )
  }
}
