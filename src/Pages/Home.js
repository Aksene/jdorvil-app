import React from 'react'
import JumboHero from '../Components/JumboHero'
import PipHero from '../Components/PipHero'
import Layout from '../Components/Layout'
import TrioSection from '../Components/TrioSection'
import SplitSection from '../Components/SplitSection'
import Divider from '../Components/Divider'
import HomeServiceHero from '../Components/HomeServiceHero'
import AboutMePoster from '../Components/AboutMePoster'
import AboutMeDetail from '../Components/AboutMeDetail'
import './Home.css'

function Home() {
    return (
        <Layout>
            <JumboHero/>
            <AboutMePoster/>
            <AboutMeDetail/>
            <HomeServiceHero/>

            {/* <TrioSection/> */}
            <SplitSection/>
            <Divider/>
            {/* TODO: ADD REVIEWS SECTION */}


        </Layout>
    )
}

export default Home
