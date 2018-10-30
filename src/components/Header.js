import React, { Component } from 'react';
import disableScroll from 'disable-scroll'
import Links from './Links.js'
import '../css/Header.css'

let intro = `I am Ryan Sam, a self taught software engineer in the Houston area. In the tech industry I want 
to use my technical experience to help passionate teams build new innovative software for the web. My first 
venture was an ecommerce store with shopify. During my fruitless search for an innovative website template, 
I came to find all results led me down a soul crushing path of mundane cookie cutter disappointments. 
Drowning in the pit of banality, I took matters in my own hands. It began with me first playing with HTML and 
CSS to provide a better customer experience. Eventually, the store died but my love for making websites did 
not. Right after Christmas, I used all my money to purchase programming books. I dove head first into the 
world of development. I was so excited only a week after learning I was able to put my first websites on the 
web and show my work to anyone who had a phone. Being able to dynamically load data from a MySQL database, my 
brain was bombarded with possibilities. When I looked at inspirational websites, I would always challenge 
myself to employ what I saw in my own designs. After I was proficient in working with front end technologies, 
I started to take a new interest in working on the back end. I realized all the magic and success of tech a 
company happens here. It was challenging at first to work on a Linux machine, but I had the same enthusiasm 
as I did when I wrote my first line of code. Now, with my hard work and dedication in software advancements, 
I feel ready to offer my professional skills to great companies looking for passionate developers. I would 
like to advance into a team lead who cares about their co-workers and takes the time to really invest in the 
development, learning experience, and growth of an organization.`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this)
  }
  toggleNav() {
    this.state.navOpen ? disableScroll.on() : disableScroll.off()
    this.setState(prevState => ({navOpen: !prevState.navOpen}), 
    () => { this.state.navOpen ? disableScroll.on() : disableScroll.off() })
  }
  render() {
    return (
      <header className="header" id="home">
        <div id="menu-background" onClick={this.toggleNav} style={{display: this.state.navOpen ? "block" : "none"}}></div>
        <ul className="nav-list" style={{left: this.state.navOpen ? "0px" : "-200px"}}>
          <a href="#home" onClick={this.toggleNav}><li>Home</li></a>
          <a href="#projects" onClick={this.toggleNav}><li>Projects</li></a>
          <a href="#skills" onClick={this.toggleNav}><li>Skills</li></a>
          <a href="#contact" onClick={this.toggleNav}><li>Contact</li></a>
        </ul>
        <button id="nav-toggle" onClick={this.toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 24" style={{fill: "rgb(186,186,186)"}}>
            <path d="M0,12a2,2,0,0,1,2-2H48a2,2,0,0,1,0,4H2A2,2,0,0,1,0,12Z"/>
            <path d="M0,22a2,2,0,0,1,2-2H48a2,2,0,0,1,0,4H2A2,2,0,0,1,0,22Z"/>
            <path d="M0,2A2,2,0,0,1,2,0H48a2,2,0,0,1,2,2,2,2,0,0,1-2,2H2A2,2,0,0,1,0,2Z"/>
          </svg>
        </button>
        <Links />
        <div className="intro-msg">
          <div id="portrait">
            <img alt="of Ryan Sam" src={require("../images/ryan.jpg")}></img>
          </div>
          <p>{intro}</p>
        </div>
      </header>
    )
  }
}

export default Header