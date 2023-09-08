import React from 'react';
import '../../styles/bigPortionsStyle/firstPortionStyle.css';

import PartnerBrand from '../helper/PartnerBrand'
import CurlyEdgeBox from '../helper/CurlyEdgeBox';
import TextWithLinkBox from '../helper/TextWithLinkBox';
import BranchPara from '../helper/BranchPara'

// content from 'gitHub universe' to 'the globe' image
export default function FirstPortion () {

  return (
    <div className='flexLayoutOne'>
      <img
        className='flexImage'
        src='images/lines-hero.svg'
        alt=""
      />
      
      <div className='contentOnePortion'>
        <CurlyEdgeBox />
        <TextWithLinkBox />
        
        <div className='spaceApart'>
          <PartnerBrand />
        </div>
        
        <div className='spaceApart'>
          <BranchPara 
            title='Productivity'
            spanText='Accelerate high-quality software development. '
            otherText='Our AI-powered platform drives innovation with tools that boost developer velocity.'
            spanColor='#7ee787'
          />
        </div>
      </div>
    </div>
  )
}
