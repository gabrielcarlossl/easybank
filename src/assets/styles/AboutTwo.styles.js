/** @jsx jsx */
import { css } from '@emotion/react'

export const abAgency = css`
  padding-bottom: 147px;

  & .ab_img2{
    left: 0;
    top: 100px;
    z-index: 2;

    &:after {
      position: absolute;
      top: -40px;
      left: 40px;
      content: "";
      border: 10px solid #e62b4a;
      width: 470px;
      height: 458px;
    }

    & img {
      max-width: 100%;
      height: auto;
      -webkit-box-shadow: -2px 4px 35px 0px rgba(0, 0, 0, 0.3);
      -moz-box-shadow: -2px 4px 35px 0px rgba(0, 0, 0, 0.3);
      box-shadow: -2px 4px 35px 0px rgba(0, 0, 0, 0.3);
    }
  }
`

export const pr79 = css`
  padding-right: 79px;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-right: 15px;
    text-align: center;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 15px;
  }
`

export const mb45 = css`
  margin-bottom: 45px;
  @media (min-width: 768px) and (max-width: 990px) {
    margin-bottom: 30px;
  }
`

export const abImg = css`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  &:nth-child(2){
    position: relative;
    top: 30px;
    margin-top: 0;
    &:after{
      @media (min-width: 768px) and (max-width: 990px) {
        width: 350px;
        left: 15px;
      }
    }
  }

  & img{
    max-width: 100%;
    height: auto;
    -webkit-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 4px 30px 0px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 320px) and (max-width: 767px) {
    position: relative;
    margin: 50px 0 0;
    &:after{
      display:none;
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    position: relative;
    float: right;
    right: -5px;
  }
`
