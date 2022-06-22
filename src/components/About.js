import React, { Component } from 'react'
import picture from '../assets/picture.svg'

export default class About extends Component {
  render() {
    return (
      <>
        <a id="about" />
        <div className="header-banner">
          <h1 className="headers">About Me</h1>
        </div>
        <div id="about-container">
            <div id="about-text">
              <p>
                Qui eiusmod adipisicing qui voluptate consectetur culpa mollit id excepteur velit tempor aliqua adipisicing tempor. Duis pariatur qui ad minim occaecat et eu ea elit. Et cupidatat dolor aliquip velit dolore. Incididunt quis nisi cupidatat ex. Velit proident eu quis eiusmod quis amet cillum proident dolore laborum.
              </p>
            </div>
            <div id="about-pic">
                <img id="about-picture" src={picture}/>
            </div>
        </div>
      </>
    )
  }
}
