import React from 'react';
import '../../styles/helperStyle/didYouKnowStyle.css'
import LinkBox from './LinkBox'

export default function DidYouKnow() {

  return (
    <div className='flexLayout'>
      <img
        src='images/git-branch-productivity.svg'
        alt=''
      />

      <div className='knowLayout'>
        <LinkBox
          text='Did you know?'
          className='knowLinkStyle'
        />
        <h2 className='knowH2'>
          22% increase
        </h2>
        <h3 className='knowH3'>
          in developer productivity <br /> after three years with GitHub1
        </h3>
      </div>
    </div>
  )
}
