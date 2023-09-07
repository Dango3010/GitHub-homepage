import React from 'react';
import '../../styles/textAndOneImage/githubCopiloPart.css'
import TextWithLink from '../helper/TextWithLink';

//any description with an image on the right/below
export default function TextAndOneImage ({
  spanText, otherText, link, linkText, 
  imageName,
  oneLayout, oneImage,
  divClass, h2Class, spanClass, linkClass
}) {

  const imageSrc = `images/${imageName}`

  return (
    <div className={oneLayout}>
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
      <img 
        className={oneImage}
        src={imageSrc}
        alt=""
      />
    </div>
  )
}
