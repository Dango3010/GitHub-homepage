import React from 'react';
import '../styles/contentStyle.css'

import FirstPortion from './bigPortions/FirstPortion';
import SecondPortion from './bigPortions/SecondPortion';

// main content that includes all bigPortion components
export default function Content () {

  return (
    <div className='mainLayout'>
      <div className='contentStyle'>
        <FirstPortion />
        <img
          className='spaceApart'
          src='images/image-1.png'
          alt=""
        />
        <SecondPortion />
      </div>
    </div>
  )
}
