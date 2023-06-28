import React from 'react'
import Layout from '../Components/Layout'
import PipHero from '../Components/PipHero'
import HeaderHero from '../Components/HeaderHero'
import ServicesDetail from '../Components/ServicesDetail'
import './BookMe.css'

function BookMe() {
    return (
        <Layout>
            <HeaderHero
                source = "/assets/fit1.jpg"
                alt = "Header image"
                headerText = "Booking & Services"
                subtext = "CHECK OUT MY SERVICES AND BOOKING PORTAL"
            />
            <PipHero/>
            <ServicesDetail/>
        </Layout>
    )
}

export default BookMe
