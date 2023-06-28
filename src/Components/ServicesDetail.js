import React from 'react'
import './ServiceDetail.css'

function ServicesDetail() {
    return (
        <div className="serviceDetail-wrap">
            <div className="serviceDetail-container">
                <div className="serviceDetail-cards">
                    <div className="service-card">
                        <div className="service-card_img">
                            <img src="./assets/services/service7.jpg" alt="" />
                        </div>
                        <div className="service-card_text">
                            <h4>Fitness Consultation</h4>
                            <p>In a fitness consultation, I will evaluate your current fitness level, discuss your health and fitness goals, and create a personalized fitness plan tailored to your needs and abilities. I will also provide guidance on nutrition and supplement recommendations to maximize your results.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card_img">
                            <img src="./assets/services/service6.jpg" alt="" />
                        </div>
                        <div className="service-card_text">
                            <h4>Corrective Exercise</h4>
                            <p>Corrective exercise is a form of physical therapy that is designed to correct imbalances or weaknesses in the body that may be causing pain or limiting performance. This type of exercise involves targeted movements and stretches that are tailored to an individual’s specific needs and goals. Book me for tailored corrective exercises.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card_img">
                            <img src="./assets/services/service5.png" alt="" />
                        </div>
                        <div className="service-card_text">
                            <h4>Youth Exercise</h4>
                            <p>Youth exercise is an essential aspect of promoting a healthy lifestyle. Regular physical activity plays a crucial role in a child's growth and development, helping to build strong bones and muscles, enhance mental health, and reduce the risk of chronic diseases such as obesity and type 2 diabetes. Book me for your child</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card_img">
                            <img src="./assets/services/service4.jpg" alt="" />
                        </div>
                        <div className="service-card_text">
                            <h4>Mobility and Recovery</h4>
                            <p>Mobility and recovery are critical aspects of maintaining fitness and increasing sports performance. Mobility refers to the range of motion around a joint, while recovery involves allowing the body time to repair and regenerate after intense physical activity. Both mobility and recovery can be improved through various techniques, such as stretching, foam rolling, massage, and active rest. Properly maintaining mobility and recovery can prevent injuries, reduce soreness, and improve overall athletic performance</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card_img">
                            <img src="./assets/services/service3.jpg" alt="" />
                        </div>
                        <div className="service-card_text">
                            <h4>Group Fitness Training</h4>
                            <p>Bring your friends and let me provide you with with a personalized coaching and support inside and outside the club. Our professional programming, tools, and guidance will help you stay on track, reach your goals, and get to a healthier place.</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card_img">
                            <img src="./assets/services/service2.jpg" alt="" />
                        </div>
                        <div className="service-card_text">
                            <h4>Nutrition Counseling</h4>
                            <p>Ask me about food nutrition and how it affects quality of life and health care issues</p>
                        </div>
                    </div>
                    <div className="service-card">
                        <div className="service-card_img">
                            <img src="./assets/services/service1.jpg" alt="" />
                        </div>
                        <div className="service-card_text">
                            <h4>Personal Training</h4>
                            <p>Whether you’re new to exercising or a fitness pro, we’re here to provide you with personalized coaching and support inside and outside the club. Our professional programming, tools, and guidance will help you stay on track, reach your goals, and get to a healthier place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesDetail
