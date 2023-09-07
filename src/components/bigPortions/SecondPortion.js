import React from 'react';
import '../../styles/bigPortionsStyle/secondPortionStyle.css';
import CodespaceTextAndImage from '../largerComponents/CodespaceTextAndImage'
import DidYouKnow from '../helper/DidYouKnow'

export default function SecondPortion () {

  return (
    <div>
      <CodespaceTextAndImage />
      <div className='secondSpaceApart'>
        <DidYouKnow/>
      </div>
    </div>
  )
}
