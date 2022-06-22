import React, { Component } from 'react'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import ruby from '../assets/ruby.svg'
import react from '../assets/react.svg'
import rails from '../assets/rails.svg'
import git from '../assets/git.svg'
import github from '../assets/github2.svg'
import ps from '../assets/ps.svg'
import figma from '../assets/figma.svg'
import pg from '../assets/pg.svg'



export default class SkillSet extends Component {
  render() {
    return (
      <>
        <h1 className="headers">My Skills</h1>
        <div id="skill-set-container">
            <div className="skills">
                <h2>Languages</h2>
                <ul className="skill-list">
                    <li> <img className="icons" src={html} /> HTML</li>
                    <li> <img className="icons" src={css} /> CSS</li>
                    <li> <img className="icons" src={js} /> JavaScript</li>
                    <li> <img className="icons" src={ruby} /> Ruby</li>
                </ul>
            </div>
            <div className="skills">
                <h2>Frameworks /</h2>
                <h2>Libraries</h2>
                <ul className="skill-list">
                    <li> <img className="icons" src={react} /> React</li>
                    <li> <img className="icons" src={rails} /> Rails</li>
                </ul>
            </div>
            <div className="skills">
                <h2>Version Control</h2>
                <ul className="skill-list">
                    <li> <img className="icons" src={git} /> Git</li>
                    <li> <img className="icons" src={github} /> GitHub</li>
                </ul>

            </div>
            <div className="skills">
                <h2>Design Tools</h2>
                <ul className="skill-list">
                    <li> <img className="icons" src={ps} /> Photoshop</li>
                    <li> <img className="icons" src={figma} /> Figma</li>
                </ul>
            </div>
            <div className="skills">
                <h2>Databases</h2>
                <ul className="skill-list">
                    <li> <img className="icons" src={pg} /> PostgreSQL</li>
                </ul>
            </div>
        </div>
      </>
    )
  }
}
