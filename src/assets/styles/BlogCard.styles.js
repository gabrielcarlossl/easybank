/** @jsx jsx */
import { css } from '@emotion/react'

export const latestBlogItem = css`
  background-color: #fff;
  width: 300px;
  border-radius: 8px;
  @media (max-width: 850px) and (min-width: 500px) {
    width: 600px !important;
  }
  @media (max-width: 1500px) {
    width: 220px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  p {
    color: gray;
    @media (max-width: 850px) and (min-width: 500px) {
      font-size: 24px !important;
    }
    @media (max-width: 1500px) {
      font-size: 15px;
    }
  }
  span {
    font-size: 13px;
    @media (max-width: 850px) and (min-width: 500px) {
      font-size: 18px;
    }
  }

  .blogCardContent {
    padding: 30px;
    @media (max-width: 1500px) {
      padding: 15px;
    }
    @media (max-width: 850px) and (min-width: 500px) {
      padding: 40px;
    }
    @media (max-width: 500px) {
      padding: 25px;
    }
  }
`

export const lbiThumb = css`
  img {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    width: 300px;
    height: 200px;
    @media (max-width: 1500px) {
      width: 220px;
      height: 150px;
    }
    @media (max-width: 850px) and (min-width: 500px) {
      width: 100%;
      height: 300px;
    }
    @media (max-width: 500px) {
      width: 100%;
      height: 100%;
    }
  }
`

export const lbiDetails = css`
  h2 {
    font-size: 22px;
    margin-top: 15px;
    margin-bottom: 15px;
    @media (max-width: 1500px) {
      font-size: 18px;
    }
    @media (max-width: 850px) and (min-width: 500px) {
      font-size: 32px;
    }
    @media (max-width: 500px) {
      font-size: 20px;
    }
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
  @media (max-width: 1500px) {
    gap: 20px !important;
  }
  @media (max-width: 850px) {
    flex-direction: column;
  }
`
