import React from 'react';
import '../../styles/helperStyle/didYouKnowStyle.css'
import LinkBox from './LinkBox'

export default function DidYouKnow({
  h2Text, h3Text, fontColor
}) {

  return (
    <div className='knowLayout'>
      <LinkBox
        text='Did you know?'
        className='knowLinkStyle'
        fontColor={fontColor}
      />
      <h2 
        className='knowH2' 
        style={{color: fontColor ? `${fontColor}`: false}}
      >
        {h2Text}
      </h2>
      {h3Text
      ? <h3 className='knowH3'>{h3Text}</h3>
      : <h3 className='knowH3'>in developer productivity <br /> after three years with GitHub1</h3>
      }
    </div>
  )
}
