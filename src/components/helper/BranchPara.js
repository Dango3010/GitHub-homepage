import React from 'react';
import '../../styles/helperStyle/branchParaStyle.css'
import '../../styles/bigPortionsStyle/secondPortionStyle.css';
import '../../styles/bigPortionsStyle/firstPortionStyle.css';

export default function BranchPara ({
  title, spanText, spanTextStyle, otherText,
  branchTextWidth
}) {

  return (
    <div 
    className={
      branchTextWidth 
      ? `${branchTextWidth} branchLayout` 
      : 'branchLayout'
    }
    >
      <h2 className='h2'>
        {title}
      </h2>

      <h3 className='h3'>
        <span className={spanTextStyle}>{spanText}</span>
        {otherText}
      </h3>
    </div>
  )
}
