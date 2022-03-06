import React from 'react'
import Sunset from '../photos/jaguar.png'
import styled from 'styled-components'


const InfoSection = ({ title, content }) => {
  return (
        <div>
            <h1>{ title }</h1>
            { content }
        </div>
  )
}

const InfoWrapper = styled.div`
    color: white;
    padding: 70px 5% 5% 35px;
    background-image: url(${Sunset});
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    font-family: 'Montserrat', sans-serif;
`

const Bdiv = styled.div`

`

const Schedule = () => {
  const infoSectionProps = [
    {
      title: 'Dolores Park',
      content: <div>
        <div> 2pm - 4pm </div>
        <div> Even though we dont hang out at Dolores much, we picked it because of its central location </div>
      </div>
    },
    {
      title: 'Bar Part Time',
      content: <div>
            <div> 4pm - 6pm </div>
            <div> Wine bar with disco ball </div>
        </div>
    },
    {
      title: 'Little Star Pizza',
      content: <div>
            <div> 6pm - 7pm </div>
            <div> Vegan Cheese Pizza Place </div>
            <div> Horse winery tour at 6pm </div>
            <div> Steaktips, corn, and salad by Chef Kate 8pm </div>
        </div>
    },
    {
      title: '300 Buchanan st',
      content: <div>
            <div> 7pm - 9pm  </div>
            <div> Tiki Happy Hour 4pm - 6pm </div>
        </div>
    },
        {
      title: 'Church of 8 Wheels',
      content: <div>
            <Bdiv> 9pm - 11pm  </Bdiv>
            <Bdiv> Pool it dude 1pm - 4:30pm </Bdiv>
          </div>
    },
        {
      title: 'Karaoke',
      content: <div>
          <div > 11pm - 2am  </div>
        </div>
    }
  ]
  return (
        <InfoWrapper>
            { infoSectionProps.map(sec => <InfoSection { ...sec } />) }
        </InfoWrapper>
  )
}

export default Schedule