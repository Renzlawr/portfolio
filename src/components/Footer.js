import React, { Component } from 'react'
import gitHub from '../assets/github.svg'

export default class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
        <ul id="footer">
            <li id="footer-made" className="footer-item">
                <p > Made from scratch by </p>
                <p> Logan Ramos </p>
            </li>
            <li>
                 <a href="https://github.com/Renzlawr" target="_blank" className="footer-item">
                    <img className="footer-item" src={gitHub}/>
                </a>
            </li>
        </ul>
      </div>
    )
  }
}
