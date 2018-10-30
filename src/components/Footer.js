import React, { Component } from 'react'
import { PhoneIcon, MailIcon, HomeIcon } from '../svgs/svgs.js'

import '../css/Footer.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer" id="contact">
        <h1>Ask Me Anything!</h1>
        <ul>
          <li id="number">{PhoneIcon}<h4>832-642-5068</h4></li>
          <li id="footer-mail">{MailIcon}<h4>ryansam.inquiries@gmail.com</h4></li>
          <li id="footer-home">{HomeIcon}<h4>23814 BEAVERWOOD DRIVE, Spring TX 77373</h4></li>
        </ul>
      </div>
    )
  }
}

export default Footer