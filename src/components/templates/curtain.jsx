import React, { Component } from 'react'
import './../styles/curtain.css'
import { TypeAnimation } from 'react-type-animation';

export class Curtain extends Component {
  render() {
    return (
        <div className="curtainWhole">
            <p>Hi There!👋</p>
            <h1>I'M <span>MILBERT</span></h1>
            <h3>
                <TypeAnimation
                    sequence={[
                        'FrontEnd Developer',
                        2000,
                        'Graphic Designer',
                        2000,
                        'Digital Artist',
                        2000
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ fontSize: '1.3em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </h3>
        </div>
    )
  }
}

export default Curtain;