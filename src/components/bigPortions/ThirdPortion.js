import React from 'react';
import '../../styles/bigPortionsStyle/thirdPortionStyle.css';

import TextAndOneImage from '../largerComponents/TextAndOneImage'
import DidYouKnow from '../helper/DidYouKnow'
import GitDicussAndPull from '../largerComponents/GitDicussAndPull'

export default function ThirdPortion() {

  return (
    <div className='background'>
      <TextAndOneImage
        spanText='GitHub Issues and GitHub Projects'
        otherText=' supply flexible project management tools that adapt to your team alongside your code.'
        link='https://github.com/features/issues'
        linkText='Explore GitHub Issues'
        imageName='illu-projects.png'

        oneLayout='projectLayout'
        oneImage='projectImage'

        divClass='projectSecondLayout'
        h2Class='projectH2'
        spanClass='projectSpan'
        linkClass='projectLink'
      />

      <div className='flexLayoutThree'>
        <img
          src='images/git-branch-collaboration.svg'
          alt=""
        />
        <div>
          <DidYouKnow 
            h2Text='80% reduction'
            h3Text='in onboarding time with GitHub1'
            fontColor='#F3A18A'
          />
        </div>
      </div>

      <GitDicussAndPull/>

    </div>
  )
}


