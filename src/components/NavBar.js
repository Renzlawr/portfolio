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
          <a href="#top">
            <div id="name-container">
                <img id="name" src={namePic} alt="Logan Ramos button" />
            </div>
          </a>
          <div id="button-container">
            <a href="https://github.com/Renzlawr" target="_blank">
              <img className="buttons" src={gitHub} alt="github logo"/>
            </a>
            <a href="https://www.linkedin.com/in/loganramos/" target="_blank">
              <img className="buttons" src={linkedIn} alt="linkedin logo"/>
            </a>
            <div id="dropdownContainer">
              {!this.props.state.open && (
                <a id="dropdownButton">
                  <img onClick= { this.props.handleButtonClick } className="buttons" src={elipse} alt="three elipse logo"/>
                </a>
              )}
            </div>
          </div>
        </nav>
      </>
    )
  }
}
