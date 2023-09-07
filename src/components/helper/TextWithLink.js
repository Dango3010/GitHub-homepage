import React from 'react';
import '../../styles/helperStyle/textWithLinkStyle.css'
import LinkBox from './LinkBox'

export default function TextWithLink ({spanText, otherText, link, linkText}) {

  return (
    <div className='linkLayout'>
      <h2 className='linkH2'>
        <span className='linkSpan'>{spanText}</span>{otherText}
      </h2>
      <LinkBox
        className='linkStyle'
        text={linkText}
        link={link}
      />
    </div>
  )
}
