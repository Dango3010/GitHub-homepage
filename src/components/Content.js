import React from 'react';
import '../styles/contentStyle.css'

import FirstPortion from './bigPortions/FirstPortion';
import SecondPortion from './bigPortions/SecondPortion';
import ThirdPortion from './bigPortions/ThirdPortion';
import FourthPortion from './bigPortions/FourthPortion';

// main content that includes all big portion components
export default function Content() {

  return (
    <div className='mainLayout'>
      <div className='contentStyle'>
        <FirstPortion />

        {/* the image that includes a small, purple globe on the right  */}
        <img
          className='contentSpaceApart'
          src='images/image-1.png'
          alt=""
        />

        <SecondPortion />

        {/* the list image of prototype, beta, launch */}
        <img
          className='contentSpaceApart issueImage'
          src='images/issues-plan.png'
          alt=""
        />

        <ThirdPortion />

        <FourthPortion />

        {/* the austronaut image */}
        <div className='footer'>
          <img
            src='images/astrocat.png'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}
