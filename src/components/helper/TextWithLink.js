import React from 'react';
import '../../styles/textAndOneImage/githubCopiloPart.css'
import '../../styles/textAndOneImage/gitActionAndMobileStyle.css'

import LinkBox from './LinkBox'

//description above a link (with a name)
export default function TextWithLink ({
  spanText, otherText, link, linkText,
  divClass, h2Class, spanClass, linkClass
}) {

  return (
    <div className={divClass}>
      <h2 className={h2Class}>
        <span className={spanClass}>{spanText}</span>{otherText}
      </h2>
      <LinkBox
        className={linkClass}
        text={linkText}
        link={link}
      />
    </div>
  )
}
