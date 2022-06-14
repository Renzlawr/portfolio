import React, { Component } from 'react'
import "./App.css"
import NavBar from './components/NavBar'
import Hero from './components/Hero'

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <Hero />
      </>
    )
  }
}