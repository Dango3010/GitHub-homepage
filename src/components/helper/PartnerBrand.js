import React from 'react';
import '../../styles/helperStyle/partnerBrandStyle.css'
import brandIcons from '../../string-obj-data.js/brand-icons'

//introduce all brand partners
export default function PartnerBrand () {
  return (
    <div className='brandLayout'>
      <p className='brandPara'>
        Trusted by the world's leading & organizations ↘︎
      </p>
      {brandIcons.map(brandIcon => {
        const source = `images/${brandIcon.iconName}`
        return (
          <img
            key={brandIcon.id}
            style={{margin: '15px 35px 0px 18px', width: `${brandIcon.width}`, height: `${brandIcon.height}`}}
            src={source}
            alt=''
          />
        )
      })}
    </div>
  )
}
