import React from 'react';
import '../../styles/largerComponentStyle/textAndOneImage/gitBotAndScanStyle.css'

import TextAndOneImage from '../largerComponents/TextAndOneImage'

// render GitHub-Dependabot and GitHub-Code-scanning tabs
export default function GitBotAndScan() {

  return (
    <div className='flexTab'>
      <TextAndOneImage
        spanText='Dependabot'
        otherText=" makes it easy to find and fix vulnerable dependencies in your supply chain."
        link='https://github.com/features/security/software-supply-chain'
        linkText='Explore Dependabot'
        imageName='illu-dependabot.png'

        oneLayout='botLayout'
        oneImage='botImage'

        divClass='actionSecondLayout'
        h2Class='acMobileH2'
        spanClass='acMobileSpan'
        linkClass='acMobileLink'
      />

      <TextAndOneImage
        spanText='Code scanning'
        otherText=" is GitHub's static code analysis tool that helps you remediate issues in your code."
        link='https://resources.github.com/security/sast/'
        linkText='Download the latest SAST ebook'
        imageName='illu-code-scanning.png'

        oneLayout='gitScanLayout'
        oneImage='gitScanImage'

        divClass='mobileSecondLayout'
        h2Class='acMobileH2'
        spanClass='acMobileSpan'
        linkClass='acMobileLink'
      />
    </div>
  )
}


