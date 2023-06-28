import React from 'react'
import './SplitSection.css'

function SplitSection() {
    return (
        <div className="splitSection-wrap">
            <div className="splitScreen-image_container">
                <img src="./assets/fit2.jpg" alt="" />
            </div>
            <div className="splitScreen-text_container">
                <h5>Increase motivation</h5>
                <p>Contact or visit us to make the best move of your life. Discover the perks of working with a true professional as you get fit, stay fit and focus on your health and wellness.</p>
                {/* <img src="./assets/fit6.jpg" alt="" /> */}
            </div>
        </div>
    )
}

export default SplitSection
