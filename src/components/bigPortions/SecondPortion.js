import React from 'react';
import '../../styles/bigPortionsStyle/secondPortionStyle.css';

import CodespaceTextAndImage from '../largerComponents/CodespaceTextAndImage'
import DidYouKnow from '../helper/DidYouKnow'
import BranchPara from '../helper/BranchPara'
import TextAndOneImage from '../largerComponents/TextAndOneImage'
import GitActionAndMobile from '../largerComponents/GitActionAndMobile'

// from GitHub-CodeSpaces introduction to Collaboration branch text
export default function SecondPortion() {

  return (
    <div>
      {/* github-Codespace and its 3 images on the right */}
      <CodespaceTextAndImage />

      {/* didYouKnow 22% increase and its green branch image */}
      <div className='flexLayoutTwo'>
        <img
          src='images/git-branch-productivity.svg'
          alt=""
        />
        <div>
          <DidYouKnow
            h2Text='22% increase'
          />
        </div>
      </div>

      {/* GitHub-Copilot introduciton and its image on the right */}
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

      {/* git-actions and mobile tabs */}
      <GitActionAndMobile />

      {/* orange collaboration text section */}
      <div className='collaborationStyle'>
        <BranchPara
          title='Collaboration'
          spanText='Supercharge collaboration. '
          otherText="We provide unlimited repositories, best-in-class version control, and the world's most powerful open source community—so your team can work more efficiently together."
          spanColor='#F3A18A'
          branchTextWidth='11in'
        />
      </div>
    </div>
  )
}

