import React from 'react';
import '../../styles/largerComponentStyle/textAndOneImage/githubCopiloPart.css'
import '../../styles/largerComponentStyle/textAndOneImage/gitActionAndMobileStyle.css'
import '../../styles/largerComponentStyle/textAndOneImage/gitProjectStyle.css'

import TextWithLink from '../helper/TextWithLink';

//any description with a link and an image on the right/below
export default function TextAndOneImage({
  spanText, otherText, link, linkText,
  imageName,
  oneLayout, oneImage,
  divClass, h2Class, spanClass, linkClass
}) {

  const imageSrc = `images/${imageName}`

  return (
    <div className={oneLayout}>
      {/* description with a link */}
      <TextWithLink
        spanText={spanText}
        otherText={otherText}
        link={link}
        linkText={linkText}

        divClass={divClass}
        h2Class={h2Class}
        spanClass={spanClass}
        linkClass={linkClass}
      />

      {/* an image, either on the right or below */}
      <img
        className={oneImage}
        src={imageSrc}
        alt=""
      />
    </div>
  )
}
