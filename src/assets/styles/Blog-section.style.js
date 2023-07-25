/** @jsx jsx */
import { css } from '@emotion/react'

export const style = css`
  padding: 100px 0px 100px 0px;
  background-color: #fafafa;
  h2 {
    margin-bottom: 60px;
    color: #2d314d;
    @media (max-width: 850px) and (min-width: 500px) {
      font-size: 34px;
    }
  }

  .blogContainer {
    margin: 0px 15% 0px 15%;
    @media (max-width: 1500px) {
      display: flex;
      flex-direction: column;
      align-content: center;
      flex-wrap: wrap;
    }
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
