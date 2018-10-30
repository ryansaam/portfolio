import React from 'react'

const Links = () => {
  return (
    <div className="links">
      <div style={{backgroundColor: "#fff", width: "100%"}}><h3>Checkout my Links!</h3></div>
      <a href="https://www.linkedin.com/in/ryan-sam-748504161/" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="icon">
          <circle style={{fill: "#0077b5"}} cx="25" cy="25" r="25"/>
          <circle style={{fill: "#fff"}} cx="14.68" cy="14.69" r="3.25"/>
          <polygon style={{fill: "#fff"}} points="11.86 20.33 17.53 20.33 17.61 38.55 11.85 38.44 11.86 20.33"/>
          <path style={{fill: "#fff"}} d="M26.64,38.44H21.05v-18h5.28v2.44c2-3.6,8.21-3.74,10.66-1a8.48,8.48,0,0,1,1.57,4.75l-.09,11.81H32.9V28.17c.1-4.39-5.87-4.48-6.26,0Z"/>
        </svg>
        <span className="name">Ryan Sam</span>
      </a>
      <a href="https://github.com/ryansaam" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="icon">
          <circle cx="25" cy="25" r="25"/>
          <path style={{fill: "#fff"}} d="M11.67,17.42C9,20.81,9.22,22.24,9.16,25,9,30.51,12.3,36,20.39,36.64a4.86,4.86,0,0,0-1.52,3.42c-3.34,1.35-5.32.23-6.16-.71a24,24,0,0,1-2-2.67,4.39,4.39,0,0,0-3.23-1.37c-.89.14-.86.52-.38,1s1.7.74,2.93,3.27c1.09,3.83,4.74,4.91,8.74,3.94l0,5c0,.58-.19.67-.3.62a25.48,25.48,0,0,0,12.91,0c0-.09-.38.18-.3-1.18.05-4.62.56-9.38-1.6-11.34,8.4-.87,11.34-5.95,11.15-11.66.12-2.58-.05-5.08-2.46-7.58A10,10,0,0,0,38,10.56a11.56,11.56,0,0,0-6.71,2.69,23.07,23.07,0,0,0-12.58,0c-2.4-1.63-4.76-2.86-6.73-2.67A9.67,9.67,0,0,0,11.67,17.42Z"/>
          <ellipse cx="9.21" cy="36.34" rx="0.25" ry="0.4" transform="translate(-26.87 26.15) rotate(-60)"/>
          <ellipse cx="10.22" cy="37.34" rx="0.3" ry="0.48" transform="translate(-24.13 19.48) rotate(-47.22)"/>
          <ellipse cx="11.23" cy="38.72" rx="0.33" ry="0.55" transform="translate(-21.66 15.4) rotate(-38.48)"/>
          <ellipse cx="12.44" cy="40.13" rx="0.39" ry="0.56" transform="translate(-24.74 20.55) rotate(-45)"/>
          <ellipse cx="14.18" cy="41.17" rx="0.39" ry="0.56" transform="translate(-29.04 35.92) rotate(-64.07)"/>
          <ellipse cx="16.17" cy="41.45" rx="0.58" ry="0.38"/><ellipse cx="18.08" cy="41.23" rx="0.52" ry="0.38" transform="translate(-5 2.58) rotate(-7.16)"/>
        </svg>
        <span className="name">&#x00040;ryansaam</span>
      </a>
      <a id="email-anchor" href="mailto:ryansam.inquiries@gmail.com">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 36.56" className="icon" id="email-icon">
          <defs>
            <linearGradient id="linear-gradient" x1="32.13" y1="18.2" x2="46.67" y2="32.3" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#bababa" stopOpacity="0.7"/>
              <stop offset="1" stopColor="#fff" stopOpacity="0.5"/>
            </linearGradient>
          </defs>
          <path style={{fill: "#dd4e40"}} d="M5.92,36.55V9.72l19,12.8L43.82,9.72V36.55c.71,0,2.61,0,3.41,0C49.64,36.5,50,36,50,33.27v-30c-.19-2-1.37-3-3.41-3.28L25,14.74,3,0C1.26,0,.22,1.05,0,3.22V33.85a2.43,2.43,0,0,0,2.45,2.7Z"/>
          <polygon style={{fill: "#fff"}} points="46.59 0 24.97 14.73 3.02 0 46.59 0"/>
          <polygon style={{fill: "#fff"}} points="43.82 36.55 43.82 9.72 24.97 22.52 5.92 9.72 5.92 36.55 43.82 36.55"/>
          <polyline style={{fill: "url(#linear-gradient)"}} points="43.82 36.55 43.82 9.72 20.08 25.87 30.63 36.56"/>
          <polygon style={{fill: "#bababa"}} points="20.08 25.87 5.92 11.39 5.92 9.72 24.97 22.52 20.08 25.87"/>
          <polygon style={{fill: "#e3e3e3"}} points="5.92 11.39 5.92 36.55 20.08 25.87 5.92 11.39"/>
        </svg>
        <span className="name" id="gmail">&#x00040;gmail.com</span>
        <span className="name" id="email">ryansam.inquiries</span>
      </a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108.3 144" className="icon" id="resume">
          <path style={{fill: "#4f79bc", fillRule: "evenodd"}} d="M7.53,0H72.72l35.4,36V136.47a7.55,7.55,0,0,1-7.53,7.53H7.53A7.55,7.55,0,0,1,0,136.47V7.53A7.55,7.55,0,0,1,7.53,0Z"/>
          <path style={{fill: "#a6c1e5", fillRule: "evenodd"}} d="M108.12,36,72.72,0V28.54A7.46,7.46,0,0,0,80.15,36Z"/>
          <g style={{clipPath: "url(#clip-path)"}}>
            <image width="126" height="130" transform="translate(78.3 35.52) scale(0.24 0.24)" href="data:image/png;base64,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"/>
          </g>
          <path style={{fill: "#fff", fillRule: "evenodd"}} d="M26.89,65.6h54.2V72H26.89V65.6Zm0,36.26H60.08v6.4H26.89v-6.4Zm0-12.09h54.2v6.41H26.89V89.77Zm0-12.09h54.2v6.41H26.89Z"/>
        </svg>
        <span className="name">Resume</span>
      </a>
    </div>
  )
}

export default Links