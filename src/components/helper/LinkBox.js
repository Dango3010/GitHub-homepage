import React from 'react';

//any direct link with a name
export default function linkBoxStyle({
  link, className, text, fontColor
}) {

  return (
    <a
      className={className}
      href={link}
      style={{
        color: fontColor ? `${fontColor}` : false,
        borderColor: fontColor ? `${fontColor}` : false,
      }}
    >
      {text}
    </a>
  )
}
