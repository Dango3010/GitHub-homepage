import React from 'react';
import '../../styles/bigPortionsStyle/fourthPortionStyle.css';

import TextAndOneImage from '../largerComponents/TextAndOneImage'
import DidYouKnow from '../helper/DidYouKnow'
import GitBotAndScan from '../largerComponents/GitBotAndScan'

export default function ThirdPortion() {

  return (
    <div className='background'>
      <div className='fourthLayout'>
        <img 
          className='fourthImage'
          src='images/steps.png'
          alt=""
        />
      </div>

      <TextAndOneImage
        spanText='GitHub Advanced Security'
        otherText=' lets you gain visibility into your security posture, respond to threats proactively, and ship secure applications quickly.'
        link='https://github.com/features/security'
        linkText='Get GitHub Advanced Security'
        imageName='illu-ghas-list.png'

        oneLayout='projectLayout'
        oneImage='fourthSecondImage'

        divClass='projectSecondLayout'
        h2Class='projectH2'
        spanClass='projectSpan'
        linkClass='projectLink'
      />

      <div className='flexLayoutThree'>
        <img
          src='images/git-branch-security.svg'
          alt=""
        />
        <div>
          <DidYouKnow 
            h2Text='56 million projects'
            h3Text='fixed vulnerabilities with GitHub2'
            fontColor='#9399F8'
          />
        </div>
      </div>

      <TextAndOneImage
        spanText='Secret scanning'
        otherText=" automatically looks for partner patterns and prevents fraudulent use of accidentally committed secrets."
        link='https://github.com/features/security/code'
        linkText='Read about secret scanning'
        imageName='illu-secret-scanning.png'

        oneLayout='scanningLayout'
        oneImage='scanningImage'

        divClass='copilotSecondLayout'
        h2Class='sponsorH2'
        spanClass='copilotSpan'
        linkClass='copilotLink'
      />

      <GitBotAndScan />

    </div>
  )
}


