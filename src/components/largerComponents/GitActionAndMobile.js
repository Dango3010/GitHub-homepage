import React from 'react';
import TextAndOneImage from '../largerComponents/TextAndOneImage'

export default function SecondPortion() {

  return (
    <div>
      <TextAndOneImage
        spanText='GitHub Actions'
        otherText=' automates your build, test, and deployment workflow with simple and secure CI/CD.'
        link='https://github.com/features/actions'
        linkText='Discover GitHub Actions'
        imageName='illu-actions.png'

        oneLayout='acMobileLayout'
        oneImage='acMobileImage'

        divClass='acMobileSecondLayout'
        h2Class='acMobileH2'
        spanClass='acMobileSpan'
        linkClass='acMobileLink'
      />

    </div>
  )
}


