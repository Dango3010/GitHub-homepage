import React from 'react';
import '../../styles/helperStyle/textWithLinkStyle.css'
import LinkBox from './LinkBox'

//a direct link with a name
export default function TextWithLink({ title, text }) {

  return (
    <div className='firstLayout'>
      <h1
        className="h0-mktg mt-sm-6 mt-md-11 mt-lg-9 mb-2 mb-sm-4 position-relative z-2 
        firstTitle"
      >
        Let's build from here
      </h1>
      <p
        className="f1-mktg col-11 col-lg-10 text-normal color-fg-muted mr-lg-n4 mb-3 mb-md-4 mb-md-7 position-relative z-1
        firstText"
      >
        The AI-powered developer platform to build, scale, and deliver secure software.
      </p>
      
      <input
        className="form-control f4-mktg width-full rounded-md-right-0 inputText"
        placeholder="Email address"
        type="email"
        name="user_email"
        id="user_email"
      >
      </input>
      <button
        className="signUpButton"
        type="submit"
      >
        Sign up for GitHub
      </button>
      <LinkBox
        link="https://github.com/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+hero&ref_page=%2F"
        text="Start a free enterprise trial"
        className='anotherBox'
      />
    </div>
  )
}
