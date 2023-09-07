import React from "react";
import '../../styles/helperStyle/curlyEdgeBoxStyle.css'

export default function CurlyEdgeBox() {
  return (
    <div>
      <a 
        className="curly-edge-box"
        href='https://githubuniverse.com/?utm_source=github&utm_medium=banner&utm_campaign=bannerlo'
      >
        <img
          className='boxIcon'
          src='images/eyebrow-23@2x.png'
          alt=""
        />
        <div className="textBox">
          <p className="firstBoxText">GitHub Universe: Dive in to AI, security, and DevEx</p>
          <p style={{ color: '#6E7681' }}>Get your tickets now to join us on Nov. 8-9.</p>
        </div>
      </a>
    </div>
  );
}
