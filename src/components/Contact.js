import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
        <div id="contact">
            <h1 id="contact-header" className="headers">Contact</h1>
            <a id="contact"/>
            <div id="form-container">
                <form id="form">
                    <label>First Name</label>
                    <input className="names" type="text" name="firstname" placeholder="First Name" />

                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Last Name"/>

                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" placeholder="Email"></input>

                    <label htmlFor="Subject">Subject</label>
                    <textarea name="Subject" placeholder="Subject"></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
      </>
    )
  }
}
