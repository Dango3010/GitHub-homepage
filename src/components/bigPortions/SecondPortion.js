import React from 'react';
import '../../styles/bigPortionsStyle/secondPortionStyle.css';
import CodespaceTextAndImage from '../largerComponents/CodespaceTextAndImage'
import DidYouKnow from '../helper/DidYouKnow'
import TextAndOneImage from '../largerComponents/TextAndOneImage'

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
    </div>
  )
}

