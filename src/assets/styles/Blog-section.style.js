/** @jsx jsx */
import { css } from '@emotion/react'

export const style = css`
  padding: 100px 0px 100px 0px;
  background-color: #fafafa;
  h2 {
    margin-bottom: 60px;
    color: #2d314d;
  }

  .blogContainer {
    margin: 0px 6% 0px 6%;
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
