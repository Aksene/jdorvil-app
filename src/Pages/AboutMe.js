import React from 'react'
import Layout from '../Components/Layout'
import HeaderHero from '../Components/HeaderHero'
import AboutMePoster from '../Components/AboutMePoster'
import AboutMeDetail from '../Components/AboutMeDetail'

function AboutMe() {
    return (
        <Layout>
            <HeaderHero
                source = "/assets/fit7.jpg"
                alt = "Header image"
                headerText = "About Coach J-Dorvil"
                subtext = "OUT HERE TAKING IT ONE DAY AT A TIME"
                position = "50% 15%"
            />
            <AboutMePoster/>
            <AboutMeDetail/>

        </Layout>
    )
}

export default AboutMe
