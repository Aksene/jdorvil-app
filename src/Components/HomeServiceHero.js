import React from 'react'
import './HomeServiceHero.css'

function HomeServiceHero() {
    return (
        <div>
            <div className="service-hero">
                <div className="service-hero_cards">
                    <div className="service-hero_card-row">
                        <div className="service-hero_card">
                            <div className="card-image" style={{backgroundImage: "url(/assets/services/service1.jpg)"}}></div>
                            <div className="card-text">
                                <h3>Personal Training</h3>
                            </div>
                        </div>
                        <div className="service-hero_card">
                            <div className="card-image" style={{backgroundImage: "url(/assets/services/service2.jpg)"}}></div>
                            <div className="card-text">
                                <h3>Nutrition Counseling</h3>
                            </div>
                        </div>
                    </div>
                    <div className="service-hero_card-row" style={{display: "flex", alignItems: "center"}}>
                        <div className="service-hero_card">
                            <div className="card-image" style={{backgroundImage: "url(/assets/services/service4.jpg)"}}></div>
                            <div className="card-text">
                                <h3>Mobility and Recovery</h3>
                            </div>
                        </div>
                    </div>
                    <div className="service-hero_card-row">
                        <a href="/book"></a>
                        <div className="service-hero_card">
                            <div className="card-image" style={{backgroundImage: "url(/assets/services/service6.jpg)"}}></div>
                            <div className="card-text">
                                <h3>Corrective Exercise</h3>
                            </div>
                        </div>
                        <a href="/book">
                            <div className="service-hero_cardLink">
                                <div className="card-image" style={{backgroundImage: "url(/assets/fit1.jpg)"}}></div>
                                <div className="card-text">
                                    <h3>Click here for more...</h3>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="service-hero_text">
                    <div className="service-hero_text-row">
                        <h1 className="service-hero_header">WHAT I OFFER</h1>
                        <div className="service-hero_text-block">
                            <div className="text-block_container">
                                <h3 className="text-block_header">Endless variety</h3>
                                <p className="text-block_sub">Choose from more from the variety of services I provide. From personal training to corrective exercises, I do it all.</p>
                            </div>
                            <div className="text-block_container">
                                <h3 className="text-block_header">Something new</h3>
                                <p className="text-block_sub">Sick of the same old? You’ll never get bored here. Come discover something new, we tailor routines to you.</p>
                            </div>
                            <div className="text-block_container">
                                <h3 className="text-block_header">Let's talk</h3>
                                <p className="text-block_sub">Book counseling sessions, consultation sessions or just <a href="/contact-me" className="text-block-sub_link">contact me</a> to chop it up.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeServiceHero
