import React from 'react';
import '../../styles/bigPortionsStyle/firstPortionStyle.css';
import PartnerBrand from '../helper/PartnerBrand'
import CurlyEdgeBox from '../helper/CurlyEdgeBox';
import TextWithLinkBox from '../helper/TextWithLinkBox';

export default function FirstPortion () {

  return (
    <div className='mainLayout'>
      <div className='contentOne'>
        <div className='flexLayoutOne'>
          <img
            src='images/lines-hero.svg'
            alt=""
          />
          <div className='contentOnePortion'>
            <CurlyEdgeBox />
            <TextWithLinkBox />
            <div className='brandPortion'>
              <PartnerBrand />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
