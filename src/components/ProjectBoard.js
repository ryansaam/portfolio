import React, { Component, Fragment } from 'react'
import DescriptionBtn from './DescriptionBtn.js'

class ProjectBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorTheme: props.colorTheme,
      rotate: "rotateZ(270deg)",
      display: "none"
    }
    this.showDecription = this.showDecription.bind(this)
  }

  showDecription() {
    this.setState(prevState => ({
      rotate: prevState.rotate === "rotateZ(270deg)" ? "rotateZ(90deg)" : "rotateZ(270deg)",
      display: prevState.display === "none" ? "block" : "none"
    }))
  }

  render() {
    return (
      <Fragment>
      <div className="project-board" id={this.props.id} style={{backgroundColor: this.props.bgColor}}>
        <h3>{this.props.header}</h3>
        {this.props.app}
        <DescriptionBtn rotate={this.state.rotate} showContent={this.showDecription} />
      </div>
      <div className="project-description" id={this.props.descriptionId} style={{display: this.state.display, backgroundColor: this.props.bgColor}}>
        {this.props.content}
      </div>
      </Fragment>
    )
  }
}

export default ProjectBoard