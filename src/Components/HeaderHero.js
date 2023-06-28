import React from 'react'
import './HeaderHero.css'

function HeaderHero({source, alt, headerText, subtext, position}) {
    return (
        <div className="header-wrap">
            {/* <video src="/assets/fit6.mp4" autoPlay={true} playsInline loop muted /> */}
            <img style={{objectPosition: position ? position : "50% 45%"}}  src={source} alt={alt}/>
            <div className="header_text">
                <h1>{headerText}</h1>
                <h2>{subtext}</h2>
            </div>
        </div>
    )
}

export default HeaderHero