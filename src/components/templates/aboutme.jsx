import React, { Component } from 'react'
import './../styles/aboutme.css'
import AboutPic1s from './../images/aboutPic1.jpg'

export class aboutme extends Component {
  render() {
    return (
      <div className="aboutmeWhole">
        <div className="aboutPic">
          <img src={AboutPic1s} alt="" />
          <div className="aboutPicT">
            <h1>ABOUT<br></br>MEEE</h1>
          </div>
        </div>
        <div className="aboutText">
          <h3>The Man Who Can't Be Moved Lyrics</h3>
          <p>Going back to the corner where I first saw you<br/>
              Gonna camp in my sleeping bag, I'm not gonna move<br/>
              Got some words on cardboard, got your picture in my hand<br/>
              Saying, "If you see this girl, can you tell her where I am?"<br/>
              Some try to hand me money, they don't understand<br/>
              I'm not broke, I'm just a broken hearted man<br/>
              I know it makes no sense but what else can I do<br/>
              How can I move on when I'm still in love with you<br/>
          </p>
          <p>'Cause if one day you wake up and find that you're missing me<br/>
              And your heart starts to wonder where on this Earth I could be<br/>
              Thinkin' maybe you'll come back here to the place that we'd meet<br/>
              And you'll see me waiting for you on the corner of the street<br/>
              So I'm not moving, I'm not moving<br/>
          </p>
          <p>Balik kana di na ako galet</p>
          <p className='dd'>'Di ko alam ano ilagay dito<br/>
            Basta Passionate din ako,<br/>
            kayo na bahala kung saan!<br/>
          </p>
        </div>
      </div>
    )
  }
}

export default aboutme