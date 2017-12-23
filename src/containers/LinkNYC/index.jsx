import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import Description from '../../components/description';
import DetailFooter from '../../components/detail_footer';

import Styles from './styles.scss';

export default class LinkNYC extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Nike and LinkNYC' />
        <div className='first-row row'>
          <div className='col-6'>
            <Description
              title='The Challenge'
              text='I was given the assignment to design a smarter experience in anticipation of LinkNYC. LinkNYC is a communications network that will replace over 7,500 pay phones across the five boroughs with kiosks called Links. Each Link provides free wifi, phone calls, device charging, and a built-in tablet for internet browsing.'
            />
            <Description
              title='Background'
              text='After conducting some preliminary research, about 50,000 New Yorkers participate in running and jogging on a yearly basis. Unfortunately, about 70% are sidelined due to improper running form. I was shocked by the alarming amount of runners that experienced injuries and was curious as to the reason these injuries were so persistent.'
            />
          </div>
          <div className='col-6'>
            <Description
              title='My Role'
              text='Product Designer, Visual Designer'
            />
            <Description
              title='Time'
              text='01/2016 — 05/2016'
            />
            <Description
              title='Credit'
              text="Instructors — Willy Wong, J. Tang
Instructors — Hoshi Ludwig
Animator — Kurt Rauffer"
            />
          </div>
        </div>
        <iframe allowFullScreen frameborder="0" height="564" mozallowfullscreen src="https://player.vimeo.com/video/ 158869479" webkitAllowFullScreen width="640"></iframe>
        <div className='row'>
          <div className='col-7'>
            <Description
              title='Research'
              text='I delved deeper and conducted 10 in-person interviews with runners in order to gain insight on this matter. The main takeaways from the interview are that new and old runners tend to run by themselves. Unfortunately injury is common and can happen up to twice a year. A runner’s form is important during their session.'
            />
          </div>
        </div>
        <hr/>
        <div className='col-12 section-header'>
          Sketching
        </div>
        <div className='row'>
          <div className='col-7'>
            <Description
              title='The Product'
              text='Taking my research into account, a runner’s form is important during their session. It’s difficult to access one’s technique without a personal trainer or coach. To address this problem Nike will introduce Circuit, a system designed to help runners reduce the risk of injury by improving their form.'
            />
            <Description
              title='Wireframes'
              text="I began by sketching Link NYC displays and Nike+Running app screens. After a couple rounds of design I began to test the prototype with Invision. In the first version runners were having issues with the following: The activity screen felt cluttered and information presented were confusing without labels. The lack of instructions resulted in abandonment of the LinkNYC kiosk and Nike+Running app."
            />
            <img className='prev' src='../../assets/LinkNYC/2_Placeholder.png'/>
          </div>
        </div>
        <hr/>
        <div className='col-12 section-header'>
          User Journey
        </div>
        <div className='row'>
          <div className='col-6'>
            <Description
              title='LinkNYC'
              text='By partnering with LinkNYC’s network of connected kiosks, correcting form is as simple as going out for a run. When a runner approaches participating Links outside of an NYC Nike Store, they can allow Circuit to track their device wirelessly with the Nike+ running app. Verification only takes 3 steps and will send a route to the mobile device.

Routes are selected based on Link locations and proximity to runner. It will then print out a temporary sensor tattoo to track her biometrics.'
            />
          </div>
          <div className='col-3'>
            <img className='iphone' src='../../assets/LinkNYC/3_Kiosk.gif' />
          </div>
        </div>
        <div className='col-9'>
          <img className='placeholder' src='../../assets/LinkNYC/4_Tattoo.tif' />
        </div>
        <hr/>
        <div className='col-12 section-header'>
          Nike+ Running
        </div>
        <div className='row'>
          <div className='col-6'>
            <Description
              title='Post-Run'
              text='During the run, audio cues from the Nike+ Running app will help guide her along the route. The goal was to capture a five second video as she runs past the kiosk camera.

After the session, the runner can review their biometrics in the Nike+ Running app. By prioritizing the biometrics, the runner can focus on data relevant to them. (Ground contact, bounce & cadence)'
            />
          </div>
          <div className='col-3'>
            <img className='iphone' src='../../assets/LinkNYC/5_iPhone.gif' />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <Description
              title='Running Form'
              text='Tapping on the red icons reveal where bad form has occurred. This provides quick access to the video clips and the runner can see exactly which parts of their form and run can be improved.'
            />
          </div>
          <div className='col-3'>
            <img className='iphone' src='../../assets/LinkNYC/6_iPhone.gif' />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <Description
              title='Personalized Coaching'
              text='In addition to the LinkNYC video clips, Nike will provided suggested training videos from their elite runners. The goal is to correct their running form by targeting problem areas.'
            />
          </div>
          <div className='col-3'>
            <img className='iphone' src='../../assets/LinkNYC/7_iPhone.gif' />
          </div>
        </div>
        <hr/>
        <div className='col-12 section-header'>
          Branding
        </div>
        <div className='row'>
          <div className='col-6'>
            <Description
              title='Visual Designs'
              text='I wanted to tell the story of Nike+ through the use of original and bold graphics. The idea stemmed from the concept of a battery. The logo nods to the physical product while representing a surge of energy.

The icons are inspired by the running, being simple and to remain elegant over time. The same tone and language was applied to the graphics in the video as well. Using bold and understated colors speak to the brand.'
            />
          </div>
          <img src='../../assets/LinkNYC/8_Logo.jpg'/>
          <img src='../../assets/LinkNYC/9_Icons.png'/>
          <img src='../../assets/LinkNYC/10_Bounce.gif'/>
          <img src='../../assets/LinkNYC/11_FootGroundContact.gif'/>
          <img src='../../assets/LinkNYC/12_Cadence.gif'/>
          <img src='../../assets/LinkNYC/13_Tattoo.gif'/>
        </div>
        <DetailFooter prev={{text: 'Flyer', href: 'flyer'}} next={{text: 'Mizu', href: 'mizu'}}/>
      </div>
    )
  }
}
