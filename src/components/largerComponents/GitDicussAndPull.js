import React from 'react';
import '../../styles/textAndOneImage/gitDicussAndPullStyle.css'
import TextAndOneImage from '../largerComponents/TextAndOneImage'

// render GitHub-Discussion and GitHub-Pull-Requests tabs
export default function GitDicussAndPull() {

  return (
    <div className='disPullFlexTab'>
      <TextAndOneImage
        spanText='GitHub Discussions'
        otherText=' create space to ask questions and have open-ended conversations.'
        link='https://github.com/features/discussions'
        linkText='Enable GitHub Discussions'
        imageName='illu-discussions.png'

        oneLayout='discussLayout'
        oneImage='discussImage'

        divClass='discussSecondLayout'
        h2Class='disPullH2'
        spanClass='disPullSpan'
        linkClass='disPullLink'
      />

      <TextAndOneImage
        spanText='Pull requests'
        otherText=' allow real-time communication and collaboration about code changes.'
        link='https://github.com/features/code-review'
        linkText='Check out pull requests'
        imageName='illu-pull-requests.png'

        oneLayout='mobileLayout'
        oneImage='mobileImage'

        divClass='mobileSecondLayout'
        h2Class='disPullH2'
        spanClass='disPullSpan'
        linkClass='disPullLink'
      />
    </div>
  )
}


