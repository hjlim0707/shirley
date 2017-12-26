import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import Description from '../../components/description';
import DetailFooter from '../../components/detail_footer';

export default class Flyer extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Flyer Planning Tools' />
        <div className='product-detail-content'>
          <div className='first-row row'>
            <div className='col-12 col-md-6'>
              <Description
                title='The Product'
                text='Flyer, an app for casual and everyday get togethers. Compared to the Core product, Paperless focuses on the celebration of special moments or occasions. Flyer is reimagining the event space in a more frequent and spontaneous manner.'
              />
              <Description
                title='Scope'
                text='I worked in a multidisciplinary team to design the planning tools for the app. This feature gives the organizer the ability to set a date or date poll.'
              />
              <Description
                title='Users'
                text='Flyer targets a younger generation/demographic who range from 25 - 35 years of age, while the event planning app is geared towards smaller groups ranging from 6 to 20 people. This cohort is early adopters of new products and technically savvy.'
              />
            </div>
            <hr className='hr-mobile'/>
            <div className='col-12 col-md-6'>
              <Description
                title='My Role'
                text='Product Designer, Visual Designer'
              />
              <Description
                title='Time'
                text='02/2017 — 04/2017'
              />
              <Description
                title='Credit'
                text="Co Product Designer — Eli Showalter
Brand Designer — Ray Masaki
Content Designer — Norah Stone"
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img src='../../assets/Flyer/1_Placeholder.jpg'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-7'>
              <Description
                title='Understanding our organizer'
                text='Luckily, I have friends (phew) that frequently plan parties and happy hours with friends and family. I secretly disguised my casual conversations as a user-interviews and learned about their hosting experiences. (”Why do you host events?, “How long does it take for the group to respond, and how you felt afterwards?”) Uncovering these patterns have helped me understand the organizer’s rollercoaster of emotions when planning an event. Their pain-points have also revealed the different types of guest and their behaviors when planning a party.'
              />
            </div>
          </div>
          <hr/>
          <div className='col-12 section-header'>
            Discovery
          </div>
          <div className='row'>
            <div className='col-12 col-md-7'>
              <Description
                title='UX Challenge'
                text='One of the many challenges for the host is the planning aspect. We, as the team, acknowledge the difficulties when it comes to setting a date, time and location with a group of people. By prioritizing the needs of the organizer, we’ve decided to tackle each requirement one step at a time.'
              />
              <Description
                title='Planned and Unplanned'
                text="There are two scenarios, planned and unplanned. For the planned scenario, the organizer sets one date, time, and location and sends out a flyer to the group. In an unplanned scenario, it is especially important for the organizer to suggest dates and coordinate the other details after. Our intentions were to make our organizer’s life easier by helping them finalize a date for their event. When guests engage with the organizer, their participation adds more value into the event as more input is shared.."
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <img src='../../assets/Flyer/2_JourneyMap.png'/>
            </div>
          </div>
          <hr/>
          <div className='col-12 section-header'>
            Design Process
          </div>
          <div className='row'>
            <div className='col-12 col-md-7'>
              <Description
                title='Wireframes'
                text='In our first iteration, when an organizer creates an event, we would automatically default the organizer to set a date for their flyer. If the organizer chooses to add another date, that would create a polling calendar for their guests to vote for the option that works best for everyone.

  This version had a minimal and clean UI, but it wasn’t intuitive enough for our organizers. This feature lacked instructions and caused confusion. It was an interesting challenge balancing the interaction, language and typography.'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img src='../../assets/Flyer/3_Flyer.png' />
            </div>
          </div>
          <hr/>
          <div className='col-12 section-header'>
            Designs
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img src='../../assets/Flyer/4_Placeholder.png' />
              <div className='pic-desc'>L to R: Create your event, unplanned event</div>
            </div>
            <div className='col-12 col-md-7'>
              <Description
                title='Create your Event'
                text='The first step in creating a Flyer is to fill out a form with the name and event type you’re hosting. In the event where the organizer wants to vote on available dates, this can help frame the question for the poll feature.'
              />
              <Description
                title='Unplanned and Planned'
                text="When the organizer sets the date and time, he or she has the option to either finalize a date or set up a poll. To set up a poll, the organizer proposes up to three dates and gives the a certain amount of time for the guests to vote on their availability.  By helping the organizer narrow their choices by setting a date, the time and location can be easier to manage after."
              />
            </div>
            <div className='col-12 col-md-10'>
              <img src='../../assets/Flyer/5_Placeholder.png' />
              <div className='pic-desc'>Planned Event</div>
            </div>
            <div className='col-12 col-md-7'>
              <Description
                title='Preview and Send'
                text='The final steps are to preview and send out the Flyer. The organizer sees how the event page and poll would look like, and has the option to make any changes before sending it out.
<br/>Since the guests may not all have the Flyer app on their phone, they will receive an SMS with a URL linking to a chat that gives them the option to vote. To ensure continued interaction, guests are prompted to download the app for more features on Flyer.'
              />
            </div>
          </div>
        </div>
        <DetailFooter prev={{text: 'Paperless Post', href: 'post'}} next={{text: 'LinkNYC', href: 'linkNYC'}}/>
      </div>
    )
  }
}
