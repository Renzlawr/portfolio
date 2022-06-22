import React, { Component } from 'react'
import xmark from '../assets/xmark.svg'
import BubblePlanetsTwo from '../assets/bubble-planets-purple.svg'
import namePic from '../assets/name-black.svg'


export default class Dropdown extends Component {
  render() {
    return (
      <>
        {this.props.state.open && (
          <div id="dropdown">
            <div id="illustration-dark">
              <img id="bubble-planets-dark" src={BubblePlanetsTwo} />
            </div>
            <ul id="dropdownList">
              <li className="dropdown-links">
                <a href="#skills" onClick= { this.props.handleButtonClick }>
                  skills
                </a> 
              </li>
              <li className="dropdown-links">
                <a href="#projects" onClick= { this.props.handleButtonClick }>
                  projects
                </a>
              </li>
              <li className="dropdown-links">
                <a href="#about" onClick= { this.props.handleButtonClick }>
                  about
                </a>
              </li>
              <li className="dropdown-links">
                <a href="#contact" onClick= { this.props.handleButtonClick }>
                  contact
                </a>
              </li>
            </ul>
            <div id="xmarkBox">
              <a href="#top" onClick= { this.props.handleButtonClick }>
                <div id="name-container">
                    <img id="name" src={namePic} alt="Logan Ramos button" />
                </div>
              </a>
              <img onClick= { this.props.handleButtonClick } className="buttons" id="xmark" src={xmark} alt="x mark logo" />
            </div>
          </div>
        )}
      </>
    )
  }
}
