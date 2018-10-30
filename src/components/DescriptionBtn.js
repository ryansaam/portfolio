import React from 'react'

const DescriptionBtn = (props) => {
  return (
    <button className="description-btn" onClick={props.showContent}>
      <div className="shine"></div>
      <span>see description</span>
      <svg xmlns="http://www.w3.org/2000/svg" style={{transform: props.rotate}} viewBox="0 0 30 50.06">
        <polygon points="0 0 30 24.94 0 50.06 0 43.5 21.99 24.98 0 6.49 0 0"/>
      </svg>
    </button>
  )
}

export default DescriptionBtn