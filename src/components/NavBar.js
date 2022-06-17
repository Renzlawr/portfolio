import React, { Component } from 'react'
import namePic from '../assets/logan-ramos.svg'
import gitHub from '../assets/github.svg'
import linkedIn from '../assets/linkedin.svg'
import elipse from '../assets/elipse.svg'

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav>
            <div id="name-container">
                <img id="name" src={namePic} alt="Logan Ramos button" />
            </div>
            <div id="button-container">
                <img className="buttons" src={gitHub} alt="github logo"/>
                <img className="buttons" src={linkedIn} alt="linkedin logo"/>
                <img className="buttons" src={elipse} alt="three elipse logo"/>
            </div>
        </nav>
      </>
    )
  }
}
