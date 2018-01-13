import React from 'react';
import ReactDOM from 'react-dom';

import DetailHeader from '../../components/detail_header';
import Description from '../../components/description';
import DetailFooter from '../../components/detail_footer';

export default class Mizu extends React.PureComponent {
  componentDidMount() {
    const headerHeight = document.querySelector('.detail-header').offsetHeight;
    document.querySelector('.first-row').style['marginTop'] = `${headerHeight}px`;
  }

  render() {
    return (
      <div className='product-detail-container'>
        <DetailHeader title='Mizu Meditation App' />
        <div className='product-detail-content'>
          <div className='first-row row'>
            <div className='col-12 col-md-6'>
              <Description
                title='The Project'
                className='top'
                text='I was given a week to rapid prototype a health tracker app. Ironically my current lifestyle is the complete opposite of what a healthy person should practice (potato chips for dinner and restless nights due to class projects and a part time job). This might be a sign to come to terms to a regular sleeping schedule and design an app to help other restless souls like myself.'
              />
              <Description
                title='Initial Research'
                className={window.innerWidth >= 768 ? 'before-pic' : ''}
                text='I started by researching topics and apps that revolved around health, fitness, diet, and overall well-being. After my research came the interview process.'
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
                text='03/2016 — 03/2016'
              />
              <Description
                title='Credit'
                className={window.innerWidth < 768 ? 'before-pic' : ''}
                text="Instructors — Rashida White, Roman Christian"
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img src='../../assets/Mizu/1_Mizu.png'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-9 col-lg-7'>
              <Description
                title='Interviews'
                className='after-pic'
                text='With only a week to finish a rapid prototype, I began conducting 5 in-person interviews. They are designers either working in the industry or finishing their last semester at school with their age ranging from 21–38. After compiling my research I grouped my findings into similar affinities, motivations, and pain points.<br/>
                <br/>Being a design student myself, I empathized with my users in their feelings of anxiety, stress, and not being fully present when interacting with people and the environment. The responses from the designers currently working were what surprised me the most. My previous assumption was that the older audience with more consistent schedules would have more free time to combat their stress levels versus the irregular schedules students had.'
              />
            </div>
          </div>
          <hr/>
          <div className='col-12 section-header'>
            Process
          </div>
          <div className='row'>
            <div className='col-12 col-md-9 col-lg-7'>
              <Description
                title='Affinity Mapping'
                className='before-pic'
                text='From those insights I found 3 main trends. Feelings of anxiety and stress were present when their work wasn’t done. 3 out of 4 users gets less than 6 hours of sleep per day. All users had busy schedules that involved either a full-time job or school. Users had a difficult time managing their stress, due to their busy work and school schedule. I decided to create Mizu, a music meditation app that helps people de-stress with their hectic lifestyles.'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img src='../../assets/Mizu/2_Mizu.png'/>
              <div className='pic-desc'>Affinity mapping with user trends</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-9 col-lg-7'>
              <Description
                title='Emerging Patterns'
                className='after-pic before-pic'
                text='From those insights I found 3 main trends. Feelings of anxiety and stress were present when their work wasn’t done. 3 out of 4 users gets less than 6 hours of sleep per day. All users had busy schedules that involved either a full-time job or school. Users had a difficult time managing their stress, due to their busy work and school schedule. I decided to create Mizu, a music meditation app that helps people de-stress with their hectic lifestyles.'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-10'>
              <img src='../../assets/Mizu/3_Mizu.png' />
              <div className='pic-desc before-border'>Wireframes for hallway testing</div>
            </div>
          </div>
          <hr/>
          <div className='col-12 section-header before-pic-header'>
            Designs
          </div>
          <div className='row'>
            <div className='col-12 col-md-5'>
              <Description
                className={`no-padding ${window.innerWidth <= 480 ? 'before-pic' : ''}`}
                title='Onboarding'
                text='It was fun to experiment with Cinema 4D, pairing visuals with music provides the user with a calming environment and experience. When a user opens the app they’re greeted by 3 simple messages that guide them through on boarding.'
              />
            </div>
            <div className='col-8 offset-2 col-md-2 offset-md-1'>
              <img className='iphone phone-pic' src='../../assets/Mizu/4_iPhone.gif' />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-5'>
              <Description
                className={`iphone-offset ${window.innerWidth <= 480 ? 'before-pic' : ''}`}
                title='Mood Music'
                text='The goal is to create a simple experience so the user can interact with the app without having to follow detailed instructions. We give our users 3 options to help calm their sate of mind. The app plays different music depending on the mood that was chosen.'
              />
            </div>
            <div className='col-8 offset-2 col-md-2 offset-md-1'>
              <img className='iphone phone-pic' src='../../assets/Mizu/5_iPhone.gif' />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-5'>
              <Description
                className={`iphone-offset ${window.innerWidth <= 480 ? 'before-pic' : ''}`}
                title='Congrats Screen'
                text='Once the user completes the meditation session, the guide and music lets them know their completion and accomplishment. The inspirational message changes in every session and also serves as a form of motivation to keep meditating.'
              />
            </div>
            <div className='col-8 offset-2 col-md-2 offset-md-1 last'>
              <img className='phone-pic' src='../../assets/Mizu/6_iPhone.gif' />
            </div>
          </div>
        </div>
        <DetailFooter prev={{href: 'linknyc'}} next={{href: '/gd/tuft & needle'}}/>
      </div>
    )
  }
}
