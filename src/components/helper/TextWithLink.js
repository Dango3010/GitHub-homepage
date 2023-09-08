import React from 'react';
import '../../styles/largerComponentStyle/textAndOneImage/githubCopiloPart.css'
import '../../styles/largerComponentStyle/textAndOneImage/gitActionAndMobileStyle.css'

import LinkBox from './LinkBox'

//any description with a link box below it
export default function TextWithLink({
  spanText, otherText, link, linkText,
  divClass, h2Class, spanClass, linkClass
}) {

  return (
    <div className={divClass}>
      <h2 className={h2Class}>
        <span className={spanClass}>{spanText}</span>
        {otherText}
      </h2>

      {/* the link box with its name and style */}
      <LinkBox
        className={linkClass}
        text={linkText}
        link={link}
      />
    </div>
  )
}
