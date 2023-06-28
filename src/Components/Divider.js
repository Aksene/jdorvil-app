import React from 'react'
import './Divider.css'

function Divider() {
    return (
        <div className="divider-wrap">
            <div className="divider-section">
                <h1>Let me help you on your journey</h1>
                <p>Check out my <a className="divider-section_serviceLink" href="/book">services</a> and book an appointment or contact me</p>
                <div className="divider-links">
                    <a href="/contact-me">Contact Me</a>
                    <a href="/book">Book Me</a>
                </div>
            </div>
        </div>
    )
}

export default Divider
