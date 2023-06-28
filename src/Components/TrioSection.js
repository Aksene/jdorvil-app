import React from 'react'
import './TrioSection.css'

function TrioSection() {
    return (
        <div className="trioSection-wrap">
            <div className="trioSection-text_section">
                <h1>What I Do</h1>
                <h5>Jack of all trades</h5>
                <div className="trioSection-header_line"></div>
                <p>As a personal trainer, my main priority is helping my clients achieve their fitness goals in a safe and efficient manner</p>
            </div>
            <div className="trioSection-image_line"></div>
            <div className="trioSection-image_section">
                <div className="trioSection-image_layout">
                    <div className="trioSection-image">
                        <img src="/assets/fit4.jpg" alt="" />
                        {/* <h4>About me</h4> */}
                    </div>
                    <div className="trioSection-image">
                        <img src="/assets/fit6.jpg" alt="" />

                    </div>
                    <div className="trioSection-image">
                        <img src="/assets/fit1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrioSection
