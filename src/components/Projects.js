import React, { Component, Fragment } from 'react';

import ProjectBoard from './ProjectBoard.js'
import colorTheme from './colorful-calendar/calendar.colors.js'
import Calendar from './colorful-calendar/Calendar.js'
import ScheduleMe from './schedule-me/ScheduleMe.js'
import '../css/Projects.css'

const description1 = (
  <Fragment>
    <div><a href="https://github.com/ryansaam/schedule-me" target="_blank" rel="noopener noreferrer">See on npm</a></div>
    <div><a href="https://github.com/ryansaam/schedule-me" target="_blank" rel="noopener noreferrer">See github repository</a></div>
    <p>Colorful Calendar is a widget like calendar for websites. I built it using the React framework and it is 
    available now for use in React by installing the package through npm. It differs from other calendars. Rather 
    than layout focused, Colorful Calendar focuses on easily being able to change the color of all the 
    different parts in the calendar. By passing an object of colors in the component's "colors" property 
    Colorful Calendar in easily customizable to infinite color schemes for your website. It dynamically 
    generates 42 document nodes based on a "new Date()" object passed into the component's "date" property. 
    All the months are accurate as the main function returns an object of dates allowing for leap years. This 
    was a really fun project for me and I hope other people are able to discover it on npm and incorporate it 
    in their websites too.</p>
  </Fragment>
)

const description2 = (
  <Fragment>
    <div><a href="https://github.com/ryansaam/schedule-me" target="_blank" rel="noopener noreferrer">See github repository</a></div>
    <span style={{display: "block", marginTop: "5px"}}>Select a date!</span>
    <p>Schedule Me was the original inspiration for Colorful Calendar. Initially, the idea was to create a 
    web-app that could communicate with a database who's data could be used for native applications.The 
    current model of the web-app is in the MVP stage. The functionality allows developers to send the form 
    data using the POST method. In my implementation, I use the most straight forward approach. I utilized 
    the php "mail()" method, with a configured SMTP server on a cloud based system. The added functionally on 
    the front end disables the user from scheduling on invalid dates, and allows the installer of the 
    application to set how far ahead in time the user can schedule an appointment. Because the application 
    submits user input to a server, security is a concern. To protect from SQL injection I've used best 
    practices in php to strip any malicious inputs from being executed on the server. My scheduler can be 
    modified to suit small to enterprise sized businesses. Likewise, this could be useful for my own 
    aspirations on running a company or team.</p>
    <span>Note: The form is not setup to work on this website</span>
  </Fragment>
)

class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <h1>Javascript Projects</h1>
        <div className="boards">
          <ProjectBoard 
            header={"Colorful Calendar"} 
            bgColor={"rgb(252,232,255)"}
            display={"none"}
            app={<Calendar className="calendar" date={new Date()} colors={colorTheme.original} />}
            id={"project1"}
            content={description1}
            descriptionId={"description1"}
          />
          <ProjectBoard 
            header={"Schedule Me"} 
            colorTheme={colorTheme.purplenight}
            bgColor={"rgb(7,8,38)"}
            display={"none"}
            app={<ScheduleMe className="calendar" date={new Date()} colors={colorTheme.purplenight} />}
            id={"project2"}
            content={description2}
            descriptionId={"description2"}
          />
          <div className="project-board" id="project3">
            <h3>Esteban Salon</h3>
            <img id="salon-img" alt="estebansalon.com" src={require("../images/esteban-salon.png")}></img>
            <div className="project-description">
              <div><a href="https://estebansalon.com" target="_blank" rel="noopener noreferrer">https://estebansalon.com</a></div>
              <p>Estebansalon.com, a website I created for a salon, is a favorite amongst my salon owner clients. 
              Currently, I am still in the process of creating separate pages for each owner. As of now my Schedule Me 
              app handles distributing the salon’s clients amongst each stylist. Also, in the footer, I incorporate 
              google maps so customers instantly get directions to the location. This makes managing client bookings an 
              easier task between them.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects