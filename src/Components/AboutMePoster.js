import React from 'react'
import './AboutMePoster.css'

function AboutMePoster() {
    return (
        <div className="poster-container">
            <img className="poster-bg" src="/assets/fit8.png" alt="" />
            <div className="poster-text_container">
                <div className="poster-text_header">
                    <h2>MEET</h2>
                    <h1>COACH DORVIL</h1>
                    <h4>Degree in Exercise Science and Certified with the National Academy of Sports Medicine</h4>
                </div>
                <br />
                <p>
                    I'm from Miami, Florida and I'm an avid sports fan. If I'm not working you can catch me rooting for my Dolphins and being a Heat Fan by nature. <br /><br />
                    As a trainer for multiple years with a degree in Exercise Science and a certification with the National Academy of Sports Medicine. I've always had a passion in teaching and helping people learn how to exercise, eat properly, and enjoy their adventures with fitness.
                </p>
            </div>
        </div>
    )
}

export default AboutMePoster