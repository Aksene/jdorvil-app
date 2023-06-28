import React from 'react'
import './ContactMe.css'
import Layout from '../Components/Layout'
import HeaderHero from '../Components/HeaderHero'


const ContactMe = () => {
    return (
        <Layout>
            <div className="contactMe-container">
                <HeaderHero
                    source = "/assets/contact.gif"
                    alt = "Header image"
                    headerText = "Contact Me"
                    // subtext = "CHECK OUT MY SERVICES AND BOOKING PORTAL"
                />
                <div className="contactMe-header_text">
                        <h2>Let's chop it up!</h2>
                        <h4>My clients are important to me, so I love having conversations about anything I'm interested in or do.</h4>
                </div>
                <div class="contactMe-form_row">
                    <div className="contactMe-form_container">
                        <div class="column1">
                            <form className="container1" action="https://submit-form.com/BvgXKc8o">
                                <label for="name">Name: </label>
                                <input type="text" id="name" name="name" placeholder="Name" required="required" />
                                <label for="number">Number: </label>
                                <input type="text" id="number" name="number" placeholder="Phone Number" required="required" />
                                <label for="email">E-mail: </label>                
                                <input type="email" id="email" name="email" placeholder="Email" required="required" />
                                <label for="message">Message: </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Message"
                                    required="required"
                                ></textarea>
                                <button type="submit" className="submit_btn"> Send </button>
                            </form>
                        </div>
                        <div class="column2">
                            <div className="container2">
                                <label for="Name">Name: </label>
                                <text for="name">J-Dorvil</text>
                                <label for="number">Number: </label>
                                <text for="number"> (617) 910-0357 / (617) 230-6716</text>
                                <label for="email">E-mail: </label>                
                                <text for="email">coachjdorvil@gmail.com</text>
                                {/* <text for="desc">Please contact me anytime for a conversation about my experience and background</text> */}
                                {/* <img src={logo} className="contact_me-logo" alt="Abdous-world" /> */}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </Layout>
    )
}

export default ContactMe
