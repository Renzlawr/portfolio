import React, { Component } from 'react'
import picture from '../assets/picture.svg'

export default class About extends Component {
  render() {
    return (
      <>
        <div id="about-me">
            <div id="about-text" className="about-content">
                <p>
                    Dolore aliqua eu excepteur dolore culpa labore magna eiusmod proident excepteur laborum ut sit. Proident esse culpa minim laborum adipisicing non enim in aliqua dolor. Et excepteur pariatur sit commodo ex sit excepteur ut officia amet in. Cupidatat magna labore mollit velit. Enim eiusmod et cillum ullamco. Dolor irure ipsum proident exercitation deserunt ex ea exercitation enim. Eu ipsum veniam occaecat incididunt occaecat.
                </p>
                <div id="downloads">
                    <a className="about-button">
                        Resume
                    </a>
                    <a className="about-button">
                        Cover Letter
                    </a>
                </div>
            </div>
            <div className="about-content">
                <img id="about-picture" src={picture}/>
            </div>
        </div>
      </>
    )
  }
}
