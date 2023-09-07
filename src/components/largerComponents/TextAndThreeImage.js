import React from 'react';
import '../../styles/largerComponentStyle/text&ThreeImageStyle.css'
import TextWithLink from '../helper/TextWithLink'

export default function TextAndThreeImage () {

  return (
    <div className='threeLayout'>
      <TextWithLink 
        spanText='GitHub Codespaces'
        otherText=' offers a complete dev environment in seconds, so you can code, build, test, and open pull requests from any repo anywhere.'
        link='https://github.com/features/codespaces'
        linkText='Check out GitHub Codespaces'

        divClass='threeDivClass'
        h2Class='threeH2Class'
        spanClass='threeSpanClass'
        linkClass='threeLinkClass'
      />
      <div>
        <img 
          className='threeImageOne'
          src='images/illo-ports.png'
          alt=""
        />
        <img 
          className='threeCursor'
          src='images/illo-cursor.png'
          alt=""
        />
        <img 
          className='threeImageTwo'
          src='images/illo-context-menu.png'
          alt=""
        />
      </div>
    </div>
  )
}
