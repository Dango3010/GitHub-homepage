import React from 'react';
import '../../styles/textAndOneImage/gitActionAndMobileStyle.css'
import TextAndOneImage from '../largerComponents/TextAndOneImage'

// render GitHub-Actions and GitHub-Mobile tabs
export default function SecondPortion() {

  return (
    <div className='flexTab'>
      <TextAndOneImage
        spanText='GitHub Actions'
        otherText=' automates your build, test, and deployment workflow with simple and secure CI/CD.'
        link='https://github.com/features/actions'
        linkText='Discover GitHub Actions'
        imageName='illu-actions.png'

        oneLayout='actionLayout'
        oneImage='actionImage'

        divClass='actionSecondLayout'
        h2Class='acMobileH2'
        spanClass='acMobileSpan'
        linkClass='acMobileLink'
      />

      <TextAndOneImage
        spanText='GitHub Mobile'
        otherText=' fits your projects in your pocket, so you never miss a beat while on the go.'
        link='https://github.com/mobile'
        linkText='Get GitHub Mobile'
        imageName='illu-mobile.png'

        oneLayout='mobileLayout'
        oneImage='mobileImage'

        divClass='mobileSecondLayout'
        h2Class='acMobileH2'
        spanClass='acMobileSpan'
        linkClass='acMobileLink'
      />
    </div>
  )
}


