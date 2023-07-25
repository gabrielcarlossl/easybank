/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Col, Container, Row } from 'react-bootstrap'
import {
  customSection,
} from '../assets/styles/NextGenBankSection.style'
import RequestInviteButton from './request-invite-button'
import bgColors from '../assets/images/bg-intro-desktop.svg'
import phones from '../assets/images/image-mockups.png'

const NextGenBankSection = () => {
  return (
    <div>
      <div css={customSection}>
        <Row style={{flexWrap: 'nowrap'}}>
          <div className='title'>
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <RequestInviteButton />
          </div>
          <Col className='bgImg'>
            <img className='colors' src={bgColors} alt="" />
            <img className='phones' src={phones} alt="" />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default NextGenBankSection
