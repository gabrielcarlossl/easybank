/** @jsx jsx */
import { css } from '@emotion/react'
import bgColors from '../images/bg-intro-desktop.svg'

export const customSection = css`
  margin-top: 117px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  .title {
    margin-left: 14%;
  }
  .bgImg {
    position: relative;
    left: 7%;
    bottom: 25%;
    .colors {
      position: relative;
      bottom: 26%;
    }
    @media (max-width: 1280px) and (min-width: 1200px) {
      left: 13%;
      bottom: 19%;
    }
  }
  .phones {
    z-index: 1;
    position: absolute;
    left: 20%;
    bottom: 8%;
    width: 1000px;
    @media (max-width: 1500px) and (min-width: 1200px) {
      left: 25%;
      bottom: 18%;
      width: 800px;
    }
    @media (max-width: 1280px) and (min-width: 1200px) {
      left: 13%;
      bottom: 19%;
      width: 800px;
    }
    @media (max-width: 1200px) and (min-width: 850px) {
      left: 13%;
      bottom: 28%;
      width: 700px;
    }
  }
`
