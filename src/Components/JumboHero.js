import React from 'react'
import './JumboHero.css'

function JumboHero() {
    return (
        <div className="main-header">
            <video src="/assets/fit6.mp4" autoPlay={true} playsInline loop muted />
            {/* <video autoPlay playsInline loop muted>
                <source src="/abdousWorld.png" type="video/mp4"></source>
            </video> */}
            <div className="main-header_text">
                <h1>Get fit, stay strong, and live better!</h1>
                <h2>WITH COACH J DORVIL</h2>
                <a href="/book">
                    <button type="submit" className="shadow__btn"><h2>BOOK NOW</h2></button>
                </a>
            </div>
        </div>
    )
}

export default JumboHero
