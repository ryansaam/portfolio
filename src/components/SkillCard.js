import React from 'react'

const SkillCard = (props) => {
  return (
    <div className={"skill-card "+props.posistion}>
      <div className="skill-title">
        <div>{props.logo}</div>
        <h2>{props.title}</h2>
      </div>
      <hr/>
      <div className="skill-description">{props.description}</div>
    </div>
  )
}

export default SkillCard