/** @jsx jsx */
import { jsx } from '@emotion/react'
import Card from './card'
import { cardData } from '../data'
import { whySection } from '../assets/styles/Why.style'
import { Container } from 'react-bootstrap'
const Why = () => {
  return (
    <section css={whySection}>
        <Container className='whyTitleContainer'>
          <div className='whyTitle'>
            <div>
              <h2>Why choose Easybank?</h2>
              <p>
                We leverage Open Banking to turn your bank account into your
                finatial hub. Control your finaces like never before.
              </p>
            </div>
          </div>
        </Container>
        <Container className='cards'>
          {cardData.map((data) => (
            <Card data={data} />
          ))}
        </Container>
      </section>
  )
}

export default Why
