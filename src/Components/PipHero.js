import React from 'react'
import './PipHero.css'
import { InlineWidget } from "react-calendly";


function PipHero() {
    return (
        <div className="hero-wrap">
            <img className="heroImage" src="/assets/fit3.jpg" alt="hero image"/>
            <div className="pip-figure">
                <figure>
                    <InlineWidget 
                        url="https://calendly.com/sene78?hide_gdpr_banner=1&background_color=f0f3fd&primary_color=d814f4" 
                        className="calendly-widget"
                        styles={{
                            height: '820px',
                            width: '800px',
                        }} 
                    />
                    <figcaption>
                        You can book sessions for one-on-one training, group classes, or online coaching. 
                        Our trainers offer customized workout plans tailored to your goals and fitness level, and provide guidance and motivation to help you achieve your desired results. 
                        With our streamlined booking process, staying fit has never been easier! Contact us today to book your first session.
                        {/* <br />
                        <br />
                        <a href="/book-now">
                            Book Now
                        </a> */}
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default PipHero
