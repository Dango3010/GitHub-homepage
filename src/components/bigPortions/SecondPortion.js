import React from 'react';
import '../../styles/bigPortionsStyle/secondPortionStyle.css';

import CodespaceTextAndImage from '../largerComponents/CodespaceTextAndImage'
import DidYouKnow from '../helper/DidYouKnow'
import BranchPara from '../helper/BranchPara'
import TextAndOneImage from '../largerComponents/TextAndOneImage'
import GitActionAndMobile from '../largerComponents/GitActionAndMobile'

export default function SecondPortion() {

  return (
    <div>
      <CodespaceTextAndImage />

      <div className='flexLayoutTwo'>
        <img
          src='images/git-branch-productivity.svg'
          alt=""
        />
        <div>
          <DidYouKnow />
        </div>
      </div>

      <TextAndOneImage
        spanText='GitHub Copilot'
        otherText=' is your AI pair programmer that empowers you to complete tasks 55% faster by turning natural language prompts into coding suggestions.'
        link='https://github.com/features/copilot'
        linkText='Meet GitHub Copilot'
        imageName='copilot-pic.png'

        oneLayout='copilotLayout'
        oneImage='copilotImage'

        divClass='copilotSecondLayout'
        h2Class='copilotH2'
        spanClass='copilotSpan'
        linkClass='copilotLink'
      />

      <GitActionAndMobile />

      <div className='collaborationStyle'>
        <BranchPara 
          title='Collaboration'
          spanText='Supercharge collaboration. '
          otherText='We provide unlimited repositories, best-in-class version control, and the world’s most powerful open source community—so your team can work more efficiently together.'
          spanTextStyle='collaSpan'
        />
      </div>
    </div>
  )
}

