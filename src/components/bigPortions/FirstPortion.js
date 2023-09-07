import React from 'react';
import '../../styles/bigPortionsStyle/firstPortionStyle.css';
import PartnerBrand from '../helper/PartnerBrand'
import CurlyEdgeBox from '../helper/CurlyEdgeBox';
import TextWithLinkBox from '../helper/TextWithLinkBox';
import BranchPara from '../helper/BranchPara'

// content from 'gitHub universe' to 'the globe'
export default function FirstPortion () {

  return (
    <div className='mainLayout'>
      <div className='contentOne'>  
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
              />
            </div>
          </div>  

          <img
            className='spaceShift'
            src='images/hero-drone.webp'
            alt=""
          />
        </div>

        <img
          className='spaceApart'
          src='images/image-1.png'
          alt=""
        />
      </div>
    </div>
  )
}
