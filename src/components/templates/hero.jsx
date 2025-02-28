import React, { Component } from 'react'
import './../styles/hero.css'
import { TypeAnimation } from 'react-type-animation';
import Hey from './../images/good-morning.png'


export class hero extends Component {
  render() {
    return (
      <div className="heroWhole">
        <p>ミ<br/>ル<br/>バ<br/>ー<br/>ト</p>
        <div className="texts">
          
          <h1><span>Myyy</span></h1>
          <h3>
            <TypeAnimation
                sequence={[
                    'Study Cases',
                    1000,
                    'AArrttss',
                    1000,
                    'Gaaallerryyy',
                    1000,
                    'Blog Postss',
                    1000,
                    'woorrkkss',
                    1000
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: '1.3em', display: 'inline-block' }}
                repeat={Infinity}
            />
          </h3>
          <h2>PORTFOOLIO</h2>
          <h1>PORTFOLIOO</h1>
        </div>
        <div className="heroPic">
          <div>
            <img src={Hey} alt="" />
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default hero