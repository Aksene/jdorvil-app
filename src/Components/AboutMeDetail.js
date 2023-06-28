import React from 'react'
import './AboutMeDetail.css'

function AboutMeDetail() {
    return (
        <div className="detail_wrap">
            <div className="detail_container">
                <div className="detail-text_container">
                    <h1>I am Certified with the National Academy of Sports Medicine in:</h1>
                    <h2>
                        - Personal Training 
                        <br />- Performance Enhancement Specialist 
                        <br />- Fitness Nutrition Counseling 
                        <br />- Group Fitness 
                        <br />- Corrective Exercise Specialist 
                        <br />- Youth Exercise Specialist (with more on the way to better assist my Athletes)
                    </h2>
                </div>
                <div className="detail-img_container">
                    <img className="detail-bg" src="/assets/fit9.jpg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default AboutMeDetail
