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
          <div className='product-detail-content'>
            <div className='first-row row'>
              <div className='col-12 col-md-6'>
                <Description
                  title='The Challenge'
                  className='top'
                  text='I was given the assignment to design a smarter experience in anticipation of LinkNYC. LinkNYC is a communications network that will replace over 7,500 pay phones across the five boroughs with kiosks called Links. Each Link provides free wifi, phone calls, device charging, and a built-in tablet for internet browsing.'
                />
                <Description
                  title='Background'
                  className={window.innerWidth >= 768 ? 'before-pic' : ''}
                  text='After conducting some preliminary research, about 50,000 New Yorkers participate in running and jogging on a yearly basis. Unfortunately, about 70% are sidelined due to improper running form. I was shocked by the alarming amount of runners that experienced injuries and was curious as to the reason these injuries were so persistent.'
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
                  text='01/2016 — 05/2016'
                />
                <Description
                  title='Credit'
                  className={window.innerWidth < 768 ? 'before-pic' : ''}
                  text="Instructors — Willy Wong, J. Tang
Instructors — Hoshi Ludwig
Animator — Kurt Rauffer"
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-10'>
                <iframe id='video' frameborder="0" width="100%" src="https://player.vimeo.com/video/158869479"></iframe>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-9 col-lg-7'>
                <Description
                  title='Research'
                  className='after-pic'
                  text='I delved deeper and conducted 10 in-person interviews with runners in order to gain insight on this matter. The main takeaways from the interview are that new and old runners tend to run by themselves. Unfortunately injury is common and can happen up to twice a year. A runner’s form is important during their session.'
                />
              </div>
            </div>
            <hr/>
            <div className='col-12 section-header'>
              Sketching
            </div>
            <div className='row'>
              <div className='col-12 col-md-9 col-lg-7'>
                <Description
                  title='The Product'
                  text='Taking my research into account, a runner’s form is important during their session. It’s difficult to access one’s technique without a personal trainer or coach. To address this problem Nike will introduce Circuit, a system designed to help runners reduce the risk of injury by improving their form.'
                />
                <Description
                  title='Wireframes'
                  className='before-pic'
                  text="I began by sketching Link NYC displays and Nike+Running app screens. After a couple rounds of design I began to test the prototype with Invision. In the first version runners were having issues with the following: The activity screen felt cluttered and information presented were confusing without labels. The lack of instructions resulted in abandonment of the LinkNYC kiosk and Nike+Running app."
                />
              </div>
            </div>
            <div className='row before-border'>
              <div className='col-12 col-md-10'>
                <img src='../../assets/LinkNYC/2_Nike.png'/>
                <div className='pic-desc'>Wireframes for the first version of Nike+Running app.</div>
              </div>
            </div>
            <hr/>
            <div className={`col-12 section-header ${window.innerWidth >= 768 ? 'before-pic-header' : ''}`}>
              User Journey
            </div>
            <div className='row'>
              <div className='col-12 col-md-5'>
                <Description
                  className={`${window.innerWidth >= 768 ? 'no-padding' : ''} ${window.innerWidth <= 480 ? 'before-pic' : ''}`}
                  title='LinkNYC'
                  text='By partnering with LinkNYC’s network of connected kiosks, correcting form is as simple as going out for a run. When a runner approaches participating Links outside of an NYC Nike Store, they can allow Circuit to track their device wirelessly with the Nike+ running app. Verification only takes 3 steps and will send a route to the mobile device.<br/>
  <br/>Routes are selected based on Link locations and proximity to runner. It will then print out a temporary sensor tattoo to track her biometrics.'
                />
              </div>
              <div className='col-8 offset-2 col-md-2 offset-md-1 col-lg-3 offset-lg-1'>
                <img className='phone-pic' src='../../assets/LinkNYC/3_Kiosk.gif' />
              </div>
            </div>
            <div className='row after-pic'>
              <div className='col-12 col-md-10'>
                <img className='placeholder' src='../../assets/LinkNYC/4_Tattoo.png' />
                <div className='pic-desc before-border'>Runner will place the circuit temporary sensor tattoo on their body to track their biometrics.</div>
              </div>
            </div>
            <hr/>
            <div className='col-12 section-header'>
              Nike+ Running
            </div>
            <div className='row iphone-first'>
              <div className='col-12 col-md-5'>
                <Description
                  className={`no-padding ${window.innerWidth <= 480 ? 'before-pic' : ''}`}
                  title='Post-Run'
                  text='During the run, audio cues from the Nike+ Running app will help guide her along the route. The goal was to capture a five second video as she runs past the kiosk camera.<br/>
After the session, the runner can review their biometrics in the Nike+ Running app. By prioritizing the biometrics, the runner can focus on data relevant to them. (Ground contact, bounce & cadence)'
                />
              </div>
              <div className='col-8 offset-2 col-md-3 offset-md-1 col-lg-2 offset-lg-1'>
                <img className='phone-pic' src='../../assets/LinkNYC/5_iPhone.gif' />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-5'>
                <Description
                  className={`iphone-offset ${window.innerWidth <= 480 ? 'before-pic' : ''}`}
                  title='Running Form'
                  text='Tapping on the red icons reveal where bad form has occurred. This provides quick access to the video clips and the runner can see exactly which parts of their form and run can be improved.'
                />
              </div>
              <div className='col-8 offset-2 col-md-3 offset-md-1 col-lg-2 offset-lg-1'>
                <img className='iphone phone-pic' src='../../assets/LinkNYC/6_iPhone.gif' />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-5'>
                <Description
                  className={`iphone-offset ${window.innerWidth <= 480 ? 'before-pic' : ''}`}
                  title='Personalized Coaching'
                  text='In addition to the LinkNYC video clips, Nike will provided suggested training videos from their elite runners. The goal is to correct their running form by targeting problem areas.'
                />
              </div>
              <div className='col-8 offset-2 col-md-3 offset-md-1 col-lg-2 offset-lg-1 before-border'>
                <img className='phone-pic' src='../../assets/LinkNYC/7_iPhone.gif' />
              </div>
            </div>
            <hr/>
            <div className='col-12 section-header'>
              Branding
            </div>
            <div className='row'>
              <div className='col-12 col-md-9 col-lg-7'>
                <Description
                  className='before-pic'
                  title='Visual Designs'
                  text='I wanted to tell the story of Nike+ through the use of original and bold graphics. The idea stemmed from the concept of a battery. The logo nods to the physical product while representing a surge of energy.<br/>
  <br/>The icons are inspired by the running, being simple and to remain elegant over time. The same tone and language was applied to the graphics in the video as well. Using bold and understated colors speak to the brand.'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-10'>
                <img src='../../assets/LinkNYC/8_Logo.jpg'/>
                <div className='pic-desc'>Nike Circuit logo</div>
                <img className='nike-white' src='../../assets/LinkNYC/9_Icons.png'/>
                <div className='pic-desc'>Icons</div>
                <img className='nike-white' src='../../assets/LinkNYC/10_Bounce.gif'/>
                <img className='nike-white' src='../../assets/LinkNYC/11_FootGroundContact.gif'/>
              </div>
            </div>
            <div className='row last'>
              <div className='col-12 col-md-5'>
                <img className='nike-white' src='../../assets/LinkNYC/12_Cadence.gif'/>
              </div>
              <div className='col-12 col-md-5'>
                <img className='nike-white' src='../../assets/LinkNYC/13_Tattoo.gif'/>
              </div>
            </div>
          </div>
        <DetailFooter prev={{href: 'flyer'}} next={{href: 'mizu'}}/>
      </div>
    )
  }
}
