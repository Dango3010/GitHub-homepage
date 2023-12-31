import React from 'react';
import '../../styles/helperStyle/textWithLinkBoxStyle.css'
import LinkBox from './LinkBox'

//the whole portion of "Let's build from here", including signup boxes below the texts
export default function TextWithLinkBox() {

  return (
    <div className='textBoxLayout'>
      <h1
        className="h0-mktg mt-sm-6 mt-md-11 mt-lg-9 mb-2 mb-sm-4 position-relative z-2 
        textBoxTitle"
      >
        Let's build from here
      </h1>
      <p
        className="f1-mktg col-11 col-lg-10 text-normal color-fg-muted mr-lg-n4 mb-3 mb-md-4 mb-md-7 position-relative z-1
        textBoxText"
      >
        The AI-powered developer platform to build, scale, and deliver secure software.
      </p>

      {/* input for email address, submit button and trial link */}
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
