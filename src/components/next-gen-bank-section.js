/** @jsx jsx */
import { jsx } from '@emotion/react'
import {
  customSection,
  whySection,
} from '../assets/styles/NextGenBankSection.style'
import RequestInviteButton from './request-invite-button'
import phones from '../assets/images/image-mockups.png'
import Card from './card'
import { cardData } from '../data'
import { Container } from 'react-bootstrap'

const NextGenBankSection = () => {
  return (
    <div css={customSection}>
       <section class='sectionStyle '>
        <div className='wrapper'>
          <div className='content'>
            <div data-aos="fade-left" className='image'>
              <img className='imageSrc' src={phones} alt='' />
            </div>
            <div data-aos="fade-right" className='description'>
              <h1  className='title'>Next generation digital banking</h1>
              <p className='text'>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending. saving, budgeting, investing, and
                much more.
              </p>
              <RequestInviteButton />
            </div>
          </div>
        </div>
      </section>
      <section css={whySection}>
        <Container className='whyTitleContainer'>
          <div data-aos="fade-right" className='whyTitle'>
            <div>
              <h2>Why choose Easybank?</h2>
              <p>
                We leverage Open Banking to turn your bank account into your
                finatial hub. Control your finaces like never before.
              </p>
            </div>
          </div>
        </Container>
        <Container data-aos="fade-up" className='cards'>
          {cardData.map((data) => (
            <Card data={data} />
          ))}
        </Container>
      </section>
    </div>
  )
}

export default NextGenBankSection
