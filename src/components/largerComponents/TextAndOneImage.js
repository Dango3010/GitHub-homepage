import React from 'react';
import '../../styles/largerComponentStyle/textAndOneImageStyle.css';
import TextWithLink from '../helper/TextWithLink';

//any description with an image on the right/below
export default function TextAndOneImage () {

  return (
    <div className='oneLayout'>
      <TextWithLink 
        spanText='GitHub Copilot'
        otherText=' is your AI pair programmer that empowers you to complete tasks 55% faster by turning natural language prompts into coding suggestions.'
        link='https://github.com/features/copilot'
        linkText='Meet GitHub Copilot'
      />
      <div>
        <img 
          className='oneImage'
          src='images/copilot-pic.png'
          alt=""
        />
      </div>
    </div>
  )
}
