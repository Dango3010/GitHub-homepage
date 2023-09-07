import React from 'react';
import '../../styles/helperStyle/textWithLinkStyle.css'
import LinkBox from './LinkBox'

export default function TextWithLink ({ title, text }) {

  return (
    <div className='linkLayout'>
      <h2 className='linkH2'>
        <span className='linkSpan'>GitHub Codespaces</span> offers a complete dev environment in seconds, so you can code, build, test, and open pull requests from any repo anywhere.
      </h2>
      <LinkBox
        className='linkStyle'
        text="Check out GitHub Codespaces"
        link='https://github.com/features/codespaces'
      />
    </div>
  )
}
