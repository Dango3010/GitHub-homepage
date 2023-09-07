import React from 'react';
import '../../styles/helperStyle/branchParaStyle.css'

export default function BranchPara ({title, spanText, otherText}) {

  return (
    <div className='branchLayout'>
      <h2 className='h2'>
        {title}
      </h2>

      <h3 className='h3'>
        <span className='span'>{spanText}</span>
        {otherText}
      </h3>
    </div>
  )
}
