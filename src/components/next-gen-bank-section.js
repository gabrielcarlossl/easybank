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

const NextGenBankSection = () => {
  return (
    <div css={customSection}>
      <section class='sectionStyle '>
        <div class='wrapper'>
          <div class='content'>
            <div class='image'>
              <img class='imageSrc' src={phones} alt='' />
            </div>
            <div class='description'>
              <h1 class='title'>Next generation digital banking</h1>
              <p class='text'>
                Take your finalcial life online. Your Easybank account will be a
                one-stop-shop for spending. saving, budgeting, investing, and
                much more.
              </p>
              <RequestInviteButton />
            </div>
          </div>
        </div>
      </section>
      <section css={whySection}>
        <div className='whyTitle'>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            finatial hub. Control your finaces like never before.
          </p>
        </div>
        <div className='cards'>
          {cardData.map((data) => <Card data={data} /> )
          }
        </div>
      </section>
      <section>
        
      </section>
    </div>
  )
}

export default NextGenBankSection
