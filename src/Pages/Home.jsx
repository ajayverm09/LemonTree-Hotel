import React from 'react'
import HeroSection from '../Components/HomeHero'
import MonsoonBreakSection from '../Components/HomeMonsoon'
import RewardsSection from '../Components/HomeReward'
import OffersSection from '../Components/HomeOffers'
import NewAdditions from '../Components/HomeAddition'
import Experiences from '../Components/HomeExperiences'
import EventsAndConferences from '../Components/HomeEvent'
import BrandsSection from '../Components/HomeBrands'
import LemonTreeSection from '../Components/HomeLast'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSection/>
      <MonsoonBreakSection/>
      <RewardsSection/>
      <OffersSection/>
      <NewAdditions/>
      <Experiences/>
      <EventsAndConferences/>
      <BrandsSection/>
      <LemonTreeSection/>
    </div>
  )
}

export default Home
