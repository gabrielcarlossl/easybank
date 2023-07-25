/** @jsx jsx */
import { css } from '@emotion/react'
import bgColors from '../images/bg-intro-desktop.svg'
import bgColorsMobile from '../images/bg-intro-mobile.svg'
import phones from '../images/image-mockups.png'
export const customSection = css`
  overflow-x: hidden;
  overflow-y: hidden;
  .sectionStyle {
    text-align: center;
    padding-bottom: 5em;

    .description {
      align-self: end;
      .title {
        font-weight: 400;
        color: #2d314d;
        font-family: Arial, Helvetica, sans-serif;
      }
      .text {
        color: gray;
      }
    }
  }
  .sectionStyle .text {
    margin-bottom: 2.5em;
  }
  .image {
    height: 450px;
    margin: 0 calc(-1 * var(--wrapperSpace));
    background: url(${bgColors}) center bottom no-repeat,
      url(${bgColorsMobile}) center no-repeat;
    background-size: 345px, cover;
    margin-bottom: 1.2em;
    @media (max-width: 500px) {
      background-size: 570px, cover;
    }
  }
  .imageSrc {
    @media (max-width: 500px) {
      position: relative;
      top: -7%;
      width: 400px;
    }
  }
  @media screen and (min-width: 768px) {
    .sectionStyle {
      text-align: left;
      background: url(${bgColors}) left 650px top -290px no-repeat;
      background-size: cover;
      min-height: 750px;
      box-sizing: border-box;
    }
    .content {
      position: relative;
      display: grid;
      align-items: center;
      min-height: 550px;
      grid-template-areas: 'description image';
      grid-template-columns: 370px 1fr;
      margin-left: 15%;
    }
    .image {
      grid-area: image;
      min-height: inherit;
      position: absolute;
      width: 500px;
      left: 0;
      top: 0;
      height: 768px;
      background: url(${phones}) left bottom no-repeat;
      background-size: cover;
    }
  }
  @media screen and (min-width: 1024px) {
    .imageSrc {
      display: block;
      position: relative;
      top: -12px;
      z-index: 1;
      left: 80%;
      @media (max-width: 1280px) and (min-width: 850px) {
        left: -12%;
      }
    }
    .image {
      background: none;
      left: 150px;
      right: 0;
      top: 0;
    }
  }
`

export const whySection = css`
  background-color: #f3f4f6;
  padding-top: 100px;
  padding-bottom: 100px;
  .whyTitle {
    margin-left: 15%;
    h2 {
      margin-bottom: 25px;
      color: #2d314d;
    }
    p {
      margin: 0;
      padding: 0;
      width: 600px;
      color: gray;
    }
  }
  .cards {
    display: flex;
    margin-top: 50px;
    margin-left: 15%;
    margin-right: 15%;
    gap: 20px;
    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;
      margin-left: 5%;
      margin-right: 5%;
    }
  }
`
