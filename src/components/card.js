/** @jsx jsx */
import { jsx } from '@emotion/react'
import { cardStyle } from '../assets/styles/card.style'

const Card = ({data}) => {
  return (
    <div css={cardStyle}>
      <img src={data.img} alt="icon" />
      <h4>{data.title}</h4>
      <p>{data.text}</p>
    </div>
  )
}

export default Card
