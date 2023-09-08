import React from 'react';
import '../../styles/bigPortionsStyle/firstPortionStyle.css';

import PartnerBrand from '../helper/PartnerBrand'
import CurlyEdgeBox from '../helper/CurlyEdgeBox';
import TextWithLinkBox from '../helper/TextWithLinkBox';
import BranchPara from '../helper/BranchPara'

// content from 'gitHub-universe' ad to 'the small, purple globe' image
export default function FirstPortion() {

  return (
    <div className='flexLayoutOne'>
      {/* the branch purple image on the left of 'gitHub-universe' ad */}
      <img
        className='flexImage'
        src='images/lines-hero.svg'
        alt=""
      />

      <div className='contentOnePortion'>
        {/* the 'gitHub-universe' ad */}
        <CurlyEdgeBox />

        {/* the 'let's buid from here' portion with its purple signup box */}
        <TextWithLinkBox />

        {/* a brand-introducing section */}
        <div className='spaceApart'>
          <PartnerBrand />
        </div>

        {/* green productivity text section */}
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
