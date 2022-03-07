import React from 'react'
import Sunset from '../photos/rollerskates.jpeg'
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
        <div>
          We don&apos;t hang at Dolores much (it&apos;s too &quot;crowded&quot; for Jack :-/), but we&apos;ve spent a lot of time
          over the last 3 years chilling in parks and its location
          (southern-most stop on our tour, close to 16th-Mission BART) makes it the day&apos;s perfect starting point
        </div>
      </div>
    },
    {
      title: 'Bar Part Time',
      content: <div>
            <div> 4pm - 6pm </div>
            <div>
              3 years ago, our friend Thomas showed us Ruby Wine, and it was love-at-first-sip-on-Potrero-Hill (or something like that).
              Ruby is a little far to include in our tour, but Thomas has since showed us Bar Part Time - a magical venue sharing Ruby&apos;s
              regulars, but inside with a disco ball.
            </div>
        </div>
    },
    {
      title: 'Little Star Pizza/Dancing Yak',
      content: <div>
            <div> 6pm - 7pm </div>
            <div>
              We relied on Little Star&apos;s deep dish a solid bit during the pandemic. They have Vegan Cheese that Lizzie and Jack approve of,
              so our stomachs can all rest a little easier after this stop.
              <br></br>
              <br></br>
              Feeling Nepali? Dancing Yak is another one of our faves and it&apos;s up half a block from Little Star! Jack once stole an ice cube
              out of Lizzie&apos;s mouth while eating their Butter Chicken because it was so spicy...
            </div>
        </div>
    },
    {
      title: '300 Buchanan st',
      content: <div>
            <div> 7pm - 9pm  </div>
            <div>
              A chance to see our digs one final time and make cocktails from pre-selected recipes.
              You&apos;ll need the cocktails to get through Jack sobbing and pointing out mundane
              objects in the southern San Francisco landscape for the full 2 hours.
            </div>
        </div>
    },
        {
      title: 'Church of 8 Wheels',
      content: <div>
            <Bdiv> 9pm - 11pm  </Bdiv>
            <div>
              The entree to end all entrees - the incomparable Church of 8 Wheels. Watch Lizzie
              zoom around the church while the rest of us absorb the funk and admire the magical
              weaving of skaters deep into the Fillmore night.
            </div>
          </div>
    },
        {
      title: 'Karaoke',
      content: <div>
          <div > 11pm - 2am  </div>
          <div>
            I highly doubt I&apos;ll be awake for this. - Jack
          </div>
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