import React from 'react';
import '../../styles/helperStyle/branchParaStyle.css'
import '../../styles/bigPortionsStyle/secondPortionStyle.css';
import '../../styles/bigPortionsStyle/firstPortionStyle.css';

// any title with a description besides a branch: Productivity, collaboration, security, etc.
export default function BranchPara({
  title, spanText, spanColor, otherText,
  branchTextWidth
}) {

  return (
    <div
      className='branchLayout'
      style={{ width: branchTextWidth ? `${branchTextWidth}` : false }}
    >
      <h2 className='h2'>
        {title}
      </h2>

      <h3 className='h3'>
        <span
          style={{ color: spanColor ? `${spanColor}` : false }}
        >{spanText}</span>
        {otherText}
      </h3>
    </div>
  )
}
