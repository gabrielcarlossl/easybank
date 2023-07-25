/** @jsx jsx */
import { css } from '@emotion/react'

export const cardStyle = css`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  margin-top: 20px;
  img {
    margin-bottom: 30px;
  }
  h4 {
    margin-bottom: 20px;
    color: #2d314d;
  }
  p {
    width: 300px;
    font-size: 16px;
    @media (max-width: 1400px) {
      width: 225px;
      font-size: 14px;
    }
    @media (max-width: 500px) {
      text-align: center;
      width: 100%;
    }
  }
`
