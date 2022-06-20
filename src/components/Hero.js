import React, { Component } from 'react'
import NameAndTitle from '../assets/name-and-title.svg'
import BubblePlanets from '../assets/bubble-planets.svg'

export default class Hero extends Component {
  render() {
    return (
      <>
      <a id="top" />
        <div id="hero">
          <div id="text">
            <img id="name-and-title" src={NameAndTitle} />
          </div>
          <div id="illustration">
            <img id="bubble-planets" src={BubblePlanets} />
          </div>
        </div>
      </>
    )
  }
}
