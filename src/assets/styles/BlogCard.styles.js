/** @jsx jsx */
import { css } from '@emotion/react'

export const latestBlogItem = css`
  background-color: #fff;
  width: 300px;
  border-radius: 8px;
  p {
    color: gray;
  }
  span {
    font-size: 13px;
  }
`

export const lbiThumb = css`
  img {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    width: 300px;
    height: 200px;
  }
`

export const lbiDetails = css`
  h2 {
    font-size: 22px;
    margin-top: 15px;
    margin-bottom: 15px;
    a {
      text-decoration: none;
      &:hover {
        color: #33d35e;
      }
    }
  }
`
export const blogSection = css`
display: flex;
gap: 40px;
@media (max-width: 850px) {
    flex-direction: column;
}
`
