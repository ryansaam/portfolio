import React, { Component } from 'react'
import SkillCard from './SkillCard.js'
import Svg from './Svg.js'
import ReactSVG from 'react-svg'
import { 
  reactLogo, linodeLogo, arduinoLogo,
  illustratorLogo, photoshopLogo, babelLogo,
  webpackLogo
} from '../svgs/svgs.js'
import '../css/Skills.css'

let description1 = (<p id="skill1">Currently all of my production websites are programmed with the React framework. My 
toolchain consists of using React with ES2018, bundling with Webpack, and compiling down to ES5 with Babel. 
I fully understand the component lifecycle and managing it's state as well as how receiving and passing 
props works.</p>)
let description2 = (<p id="skill2">With my experience in using Linode as my cloud hosting company, I have learned server 
administration on Linux machines. In my experience, I have installed and configured web and mail servers with
databases. For mail servers I use Postfix for SMTP and Dovecot for MTA. Usally I host my simple websites with 
NGINX but if php is needed I use Apache2. If a more spacific design is nessary I can write custom services 
with node.js and set them to be manageable with systemctl. My go to database is MySQL but I am familar with 
NoSQL databases that use JSON files for prototyping.</p>)
let description3 = (<p id="skill3">Interested in working with embedded systems and practice low level programming on 
Atmel and PIC 8-bit microcontrollers. At my current understanding on basic fundamentals of electrical engineering concepts, I can use 
microcontrollers to controll various small electrical components (shift registers, EEPROM, drivers, etc).</p>)
let description4 = (<p id="skill4">I can color correct, touch up, and manipulate images with Photoshop. Most of the pictures
I use I have edited myself. You can see an example of my work by looking at the image at the top of this page.
I also have used to software to wireframe websites. In Illustrator, I love making custom logos and svgs.
A lot of the little icons on this web page were made by me, and the logo for the Esteban Salon site was one of
my drawling I made specifically for that website</p>)

class Skills extends Component {
  render() {
    return (
      <div className="skills" id="skills">
        <div className="skill-wrapper">
          <div className="languages">
            <h2>Languages</h2>
            <hr style={{marginBottom: "20px"}} />
            <div className="languages-split">
              <div className="lang-list">
                <div className="lang-item"><h3>Proficients: </h3><span>Javascript, C++/C, python, sql</span></div>
                <div className="lang-item"><h3>Familiar: </h3><span>Golang, php, Swift</span></div>
                <div className="lang-item"><h3>Frameworks: </h3><span>React, Express.js, JQuery, OpenGL</span></div>
              </div>
              <div className="web-tech">
                <div className="web-block">
                  <h3>Web Technologies</h3>
                  <hr color="#fff"/>
                  <div className="web-grid">
                    <div className="web-svg"><Svg svg={babelLogo} /></div>
                    <div className="web-svg"><Svg svg={webpackLogo} /></div>
                    <div className="web-svg"><ReactSVG src={require("../svgs/nodejs-logo.svg")} svgStyle={{width: "60px", height: "40px"}}/></div>
                    <div className="web-svg"><ReactSVG src={require("../svgs/apache-logo.svg")} svgStyle={{width: "60px", height: "40px"}}/></div>
                    <div className="web-svg"><ReactSVG src={require("../svgs/mysql-logo.svg")} svgStyle={{width: "60px", height: "40px"}}/></div>
                    <div className="web-svg"><ReactSVG src={require("../svgs/nginx-logo.svg")} svgStyle={{width: "60px", height: "40px"}}/></div>
                  </div>
                </div>
              </div>
            </div>
            <hr/>
          </div>
        </div>
        <div className="skill-wrapper">
          <SkillCard 
            title={"React"} 
            logo={reactLogo} 
            posistion={"skill-left"}
            description={description1}
          />
        </div>
        <div className="skill-wrapper">
          <SkillCard
            logo={linodeLogo}
            posistion={"skill-right"}
            description={description2}
          />
        </div>
        <div className="skill-wrapper">
          <SkillCard 
            logo={arduinoLogo} 
            posistion={"skill-left"}
            description={description3}
          />
        </div>
        <div className="skill-wrapper">
          <SkillCard 
            title={"Adobe Photoshop & Illustrator"}
            logo={[illustratorLogo, photoshopLogo]} 
            posistion={"skill-right"}
            description={description4}
          />
        </div>
      </div>
    )
  }
}

export default Skills