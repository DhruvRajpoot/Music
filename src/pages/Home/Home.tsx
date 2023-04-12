import React from 'react'
import { BannerContent, BannerHeading, BannerImage, BannerSubHeading, HomeContainer, TopBanner } from './Home.style'
import banner from '../../assets/images/banner.png'

const Home = () => {
  return (
    <HomeContainer>
      <TopBanner>
        <BannerImage src={banner} alt="banner"/>
        <BannerContent>
          <BannerHeading>Your favorites tunes</BannerHeading>
          <BannerSubHeading>All day and all night</BannerSubHeading>
        </BannerContent>
      </TopBanner>
      
    </HomeContainer>
  )
}

export default Home
