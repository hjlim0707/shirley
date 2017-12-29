import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import DetailFooter from '../../components/detail_footer';
import Description from '../../components/description';

import Styles from './styles.scss';

export default class Post extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Mobile Web Revamp' />
        <div className='product-detail-content'>
          <div className='first-row row'>
            <div className='first-col col-12 col-md-6'>
              <Description
                title='The Product'
                className='top'
                text='Paperless Post is a dynamic platform that helps users
                and their guests gather meaningfully in real life, through beautifully
                designed invites and online event management tools.'
              />
              <Description
                title='Scope'
                text='I joined the Discovery team and worked with my fellow PD &
                PMs to increase overall engagement on the mobile web. The strategy was
                to imporve education, ease of use, and a better experience by rebuilding on
                a new code-base. This mobile revamp is broken up into several phases with A/B
                tests.'
              />
              <Description
                title='Users'
                className={window.innerWidth > 768 ? 'before-pic' : ''}
                text='Our targeted audiences are mobile users coming in through all channels:
                receiver experience, marketing e-mails, DTI and SEO.'
              />
            </div>
            <div className='col-12 col-md-6'>
              <Description
                title='My Role'
                className={window.innerWidth > 767 ? 'top' : ''}
                text='Product Designer, Visual Designer'
              />
              <Description
                title='Time'
                text='07/2016 - 01/2017'
              />
              <Description
                title='Credit'
                className={window.innerWidth < 768 ? 'before-pic' : ''}
                text="Co PD - Marissa Christy
Brand Designer - Luke Williams
Content Designer - Robyn Ng"
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img className='hero' src='../../assets/PaperlessPost/1_Hero.gif'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-7'>
              <Description
                title='Background'
                className='after-pic'
                text='Paperless Post had a low engagement on mobile web despite a high volume of users. In
                the past two years, mobile brought in about the same amount of traffic on desktop, but the
                average session is about 53% lower. One big challenge is that users can only browse cards and not create on mobile web.'
              />
              <Description
                title='Mobile Homepage Banner'
                text="In the previous experience, where users type paperlesspost.com on mobile web, they're
                greeted by a gaussian homepage takeover that points them to download the app or view the full site.
                If users click to view the full site we prompt them to login or create an account. The first experienceprovided little to no value
                to our users when we wanted them to sign up."
              />
            </div>
          </div>
          <hr/>
          <div className='col-12 section-header'>
            Process
          </div>
          <div className='row'>
            <div className='col-12 col-md-7'>
              <Description
                title='The Goal'
                text='We wanted to satisfy both our customer and business needs, and our product
                is right for anyone that’s planning an event. Paperless Post wanted to educate and inspire our
                customers by showing beautiful invitations and cards, whilst giving them the freedom to customize their designs.
                Since there is a huge hurdle with no functionality to create on mobile web, converting with inspiration and education
                meant getting users to download the iOS app or continue on desktop.'
              />
              <Description
                title='Previous User Flow'
                className='before-pic'
                text="After our initial research phase, we went through the whole user flow for the mobile web.
                When a user lands on the Paperlesspost homepage, they’re greeted by an interstitial that takes up
                the whole screen. Without providing any incentive we surface four CTA’s for our users to decide on.
                It also took five steps to sign up and there was no clear direction for the next step to engage further on the site."
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-7'>
              <img className='prev' src='../../assets/PaperlessPost/2_Previous_Exp.png'/>
              <div className='pic-desc'>Audit of previous user flow</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-7'>
              <Description
                title='User Journey'
                className='before-pic after-pic'
                text="After synthesizing our findings and patterns we mapped out an ideal user journey for audience."
              />
            </div>
            <div className='col-12 col-md-9 before-border'>
              <img className='journey' src='../../assets/PaperlessPost/3_Journey_Map.png' />
            </div>
          </div>
          <hr/>
          <div className='col-12 section-header'>
            Designs
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img style={{'padding-top': '32px'}} src='../../assets/PaperlessPost/4_Mobile-Web.gif' />
              <div className='pic-desc'>L to R: Homepage and Paper Browser</div>
            </div>
            <div className='col-12 col-md-7'>
              <Description
                title='Homepage'
                text='When a user visits Paperless Post through mobile web, they’re either someone who’s familiar with the product or might not even know who we are/what we do. On the top of the homepage, we surface a “Browse Invitations” CTA and “How It Works” section. This provides context to users as to what Paperless offers as a product.
<br/>Customers can also find inspiration in the category blocks that helps them narrow their choice down. In a way, we’re the event planner who offers a number choices and guide you after to pick the perfect invitation.'
              />
              <Description
                title='Paper Browser'
                className='before-pic'
                text="The customer can either tap into a category page or access the Paper browser from the navigation. Since we offer a large selection of cards, the user has the option to browse designs or search for a particular card within that category.
<br/>When a user taps a card, this page is important in terms of education. Below the card view the user can download the iOS app to continue to customize and send the invitation/card. The detail view also provides a preview of the card package (card, envelope, liner), and pricing."
              />
            </div>
            <div className='col-12 col-md-10'>
              <img className='placeholder' src='../../assets/PaperlessPost/5_Mobile-Web.gif' />
              <div className='pic-desc'>L to R: Homepage and Paper Browser</div>
            </div>
            <div className='col-12 col-md-7'>
              <Description
                title='Filter and Sort By'
                className='after-pic'
                text='Adding filters improve the browsing experience by helping our customers narrow down their choices before they make a decision. A common behavior is a tendency to alter the cards list. By placing the sort by and filtering in one modal, this makes it easier and more accesible for our customers to find it all in one place. We placed the free and photo filters on the grid view of cards since it ranked high in popularity amongst our customers.'
              />
              <Description
                className='last'
                title='Share and Favorites'
                text="Since customize and create isn’t available on mobile web, users can email themselves the designs to continue on desktop. They can also share the card with their friends and family via SMS, Pinterest, Facebook or copy the link.
<br/>We want to help our users to feel confident with our brand and have fun while choosing their cards. In the previous experience, if our customer isn’t signed up or logged in, we block them from favoriting at all. The new experience allows them to favorite up to three cards, and we nudge them to sign in or up to bookmark their favorites. This helps find cards easily in the next session and their decision making."
              />
            </div>
          </div>
        </div>
        <DetailFooter prev={{text: 'Floating Chain', href: '/gd/floating chain'}} next={{text: 'Flyer', href: 'flyer'}}/>
      </div>
    )
  }
}
