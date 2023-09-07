import React from 'react';
import '../../styles/largerComponentStyle/text&ThreeImageStyle.css'
import TextWithLink from '../helper/TextWithLink'

export default function TextAndThreeImage () {

  return (
    <div className='textLayout'>
      <TextWithLink 
        spanText='GitHub Codespaces'
        otherText=' offers a complete dev environment in seconds, so you can code, build, test, and open pull requests from any repo anywhere.'
        link='https://github.com/features/codespaces'
        linkText='Check out GitHub Codespaces'
      />
      <div>
        <img 
          className='textImageOne'
          src='images/illo-ports.png'
          alt=""
        />
        <img 
          className='textCursor'
          src='images/illo-cursor.png'
          alt=""
        />
        <img 
          className='textImageTwo'
          src='images/illo-context-menu.png'
          alt=""
        />
      </div>
    </div>
  )
}
