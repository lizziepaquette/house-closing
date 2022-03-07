import React from 'react'
import AirbnbPreview from './AirbnbPreview'
import RawCalendar from './RawCalendar'
import YoutubeVid from './YoutubeVid'
import Sunset from '../photos/alamosquare.jpeg'
import styled from 'styled-components'
import RawMaps from './RawMaps'

const WhereSectionWrapper = styled.div`
    > div {
        margin-bottom: 10px
    }
`

const WhereSection = () => {
  return (
        <WhereSectionWrapper>
            <RawMaps/>
        </WhereSectionWrapper>
  )
}

const InfoSection = ({ title, content }) => {
  return (
        <div>
            <h1>{ title }</h1>
            { content }
        </div>
  )
}

const AboutSectionWrapper = styled.div`
    > div {
        margin-bottom: 10px;
    }
`

const AboutSection = () => {
  return (
        <AboutSectionWrapper>
            <div>
              Hello Friends! As many of you know, we are moving out of San Francisco! After 3 memorable years (and some significant water damage) at
              300 Buchanan, the time has come for us to leave.
              <br></br>
              <br></br>
              Before we go, we want to celebrate some of the treasures in our neighborhood one
              final time. We&apos;ve put together a little Saturday evening gauntlet to run - please join us for any and all of it!!
              <br></br>
              <br></br>
              Full schedule appears on the &quot;Schedule&quot; page, and we&apos;ll provide updates on our whereabouts on the &quot;Running Updates&quot; page.
              Please also add some of your favorite party jams to the playlist on the &quot;Collaborative Playlist&quot; page!
            </div>
        </AboutSectionWrapper>
  )
}

const InfoWrapper = styled.div`
    color: black;
    text-shadow: 0 0 3px #ffffff, 0 0 5px #ffffff;
    padding: 100px 5% 5% 35px;
    background-image: url(${Sunset});
    background-position: 30% 55%;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    font-weight: 501;
    text-transform: uppercase;
    // letter-spacing: 3px;
    font-family: 'Montserrat', sans-serif;

    // @media only screen and (max-width: 600px) {
    //     padding: 1% 25px 1% 100px;
    // }
`

const Info = () => {
  const infoSectionProps = [
    {
      title: 'About',
      content: <AboutSection />
    },
    {
      title: 'Where',
      content: <WhereSection />
    }
    // {
    //   title: 'Virtual Tour',
    //   content: <YoutubeVid />
    // }
    // {
    //   title: 'AirBnB Listing',
    //   content: <AirbnbPreview />
    // }
  ]
  return (
        <InfoWrapper>
            { infoSectionProps.map(sec => <InfoSection { ...sec } />) }
        </InfoWrapper>
  )
}

export default Info
