import React, { Component } from 'react'
import xmark from '../assets/xmark.svg'
import BubblePlanetsTwo from '../assets/bubble-planets-dark.svg'

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
              <li> <a href="#top" onClick= { this.props.handleButtonClick }> Home </a> </li>
              <li> <a href="#skills" onClick= { this.props.handleButtonClick }> Skills </a> </li>
              <li> Projects </li>
              <li> Contact </li>
            </ul>
            <div id="xmarkBox">
              <img onClick= { this.props.handleButtonClick } className="buttons" src={xmark} alt="x mark logo" />
            </div>
          </div>
        )}
      </>
    )
  }
}
