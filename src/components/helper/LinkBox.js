import React from 'react';
import '../../styles/helperStyle/linkBoxStyle.css'

//a direct link with a name
export default function linkBoxStyle ({ link, className, text }) {

  return (
    <a
      className={className}
      href={link}
    >
      {text}
    </a>
  )
}
