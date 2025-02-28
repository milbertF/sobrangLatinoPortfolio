import React, { Component } from 'react'
import './../styles/header.css'
import milbertLogo from './../images/milbertLogo.png'
import Logo from './../images/logoSvgPortfolio.svg'

export class header extends Component {
  
  render() {

    return (
      <div className="headerWhole">
        <p>
          <img src={Logo} alt="" />
            <span className='span1' >M</span>
            <span className='span2' >I</span>
            <span className='span3' >L</span>
            <span className='span4' >B</span>
            <span className='span5' >E</span>
            <span className='span6' >R</span>
            <span className='span7' >T</span>
        </p>
        {/* <img src={milbertLogo} alt="" /> */}
        <div>
            <li>
                <ul>About</ul>
                <ul>Skills</ul>
                <ul>Projects</ul>
                <ul>Blog</ul>
                <ul>Contact</ul>
            </li>
        </div>
        
      </div>
    )
  }
}

export default header