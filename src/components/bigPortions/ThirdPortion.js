import React from 'react';
import '../../styles/bigPortionsStyle/thirdPortionStyle.css';

import TextAndOneImage from '../largerComponents/TextAndOneImage'
import DidYouKnow from '../helper/DidYouKnow'
import BranchPara from '../helper/BranchPara'
import GitDicussAndPull from '../largerComponents/GitDicussAndPull'

// from GitHub-Issues-and-GitHub-Projects introduction to security branch text
export default function ThirdPortion() {

  return (
    <div className='background'>
      {/* GitHub Issues and GitHub Projects and its image on the right */}
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
        spanClass='projectSpan' github
        linkClass='projectLink'
      />

      {/* the didYouKnow 80% reduction and its branch image */}
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

      {/* GitHub Discussions and Pull-requests tabs */}
      <GitDicussAndPull />

      {/* GitHub Sponsors tab */}
      <TextAndOneImage
        spanText='GitHub Sponsors'
        otherText=' lets you support your favorite open source maintainers and projects.'
        link='https://github.com/sponsors'
        linkText='Invest with GitHub Sponsors'
        imageName='git-sponsors.png'

        oneLayout='sponsorLayout'
        oneImage='sponsorImage'

        divClass='copilotSecondLayout'
        h2Class='sponsorH2'
        spanClass='copilotSpan'
        linkClass='copilotLink'
      />

      {/* purple security text section */}
      <div className='collaborationStyle'>
        <BranchPara
          title='Security'
          spanText='Embed security into the developer workflow. '
          otherText="With GitHub, developers can secure their code in minutes and organizations can automatically comply with regulations."
          spanColor='#9399F8'
          branchTextWidth='10.7in'
        />
      </div>
    </div>
  )
}


