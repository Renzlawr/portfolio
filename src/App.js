import "./App.css"
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Dropdown from './components/Dropdown'
import SkillSet from './components/SkillSet'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      open: false,
    }
  }
  handleButtonClick = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      this.state.open ? 
        <Dropdown
        state={this.state}
        handleButtonClick={this.handleButtonClick}
        />
      : 
        <>
          <NavBar 
          state={this.state}
          handleButtonClick={this.handleButtonClick}
          />
          <Hero
          state={this.state}
          animate={this.state.animate}
          />
          <SkillSet />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </>
    )
  }
}