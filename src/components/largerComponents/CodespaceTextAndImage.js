import React from 'react';
import '../../styles/largerComponentStyle/codespaceTextAndImageStyle.css'

import TextWithLink from '../helper/TextWithLink'

//includes text on the left, and the three images on the right of GitHub-Codespaces portion
export default function CodespaceTextAndImage() {

  return (
    <div className='threeLayout'>
      {/* show description and link with a name below, on the left */}
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

      {/* the 3 images on the right */}
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
