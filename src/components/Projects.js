import React, { Component } from 'react'
import projects from '../assets/projects'
import gitHub from '../assets/github2.svg'

export default class Projects extends Component {
  render() {
    return (
      <>
        <a id="projects" />
        <div className="header-banner">
          <h1 className="headers">Projects</h1>
        </div>
        <div id="project-grid">
          {projects.map(value => {
            return(
              <div key={value.index}>
                <img id="project-item" src={value.image}/>
                <p id="project-para">{value.name}<a id="project-link" href={value.link} target="_blank"><img src={gitHub} /></a></p>
              </div>
            )
          }
          )}
        </div>
      </>
    )
  }
}
