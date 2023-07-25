/** @jsx jsx */
import { css } from "@emotion/react";
import bg1 from "../images/bg/1.jpg";

export const serviceSection = css`
  background: url(${bg1}) no-repeat center center / cover;
`;

export const iconBox1 = css`
  display: inline-block;
  position: relative;
  width: 100%;
  background: transparent;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
  -ms-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: all ease 400ms;
  -webkit-transition: all ease 400ms;
  -moz-transition: all ease 400ms;

  &:hover div div:nth-child(1) {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  &:hover div div:nth-child(2) {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }

  & div div {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.6s;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: rotateY(0deg);
    -moz-transition: 0.6s;
    -moz-transform-style: preserve-3d;
    -moz-transform: rotateY(0deg);
    -o-transition: 0.6s;
    -o-transform-style: preserve-3d;
    -o-transform: rotateY(0deg);
    -ms-transition: 0.6s;
    -ms-transform-style: preserve-3d;
    -ms-transform: rotateY(0deg);
    transition: 0.6s;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    position: absolute;
    top: 0;
    left: 0;

    i {
      font-size: 64px;
      line-height: 1;
      color: #aaaaaa;
      display: block;
      margin-bottom: 17px;
      transition: all ease 400ms;
      -moz-transition: all ease 400ms;
      -webkit-transition: all ease 400ms;
    }

    h3 {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
      text-transform: uppercase;
      color: #aaaaaa;
      margin: 0;
      transition: all ease 400ms;
      -moz-transition: all ease 400ms;
      -webkit-transition: all ease 400ms;
    }

    &:nth-child(1) {
      -webkit-transform: rotateY(0deg);
      -ms-transform: rotateY(0deg);
      background: transparent;
      z-index: 2;
      border: 2px solid rgba(27, 27, 27, 1);
      padding: 48px 45px 45px;
      width: 100%;
    }

    &:nth-child(2) {
      background: #e62b4a;
      -webkit-transform: rotateY(-180deg);
      -moz-transform: rotateY(-180deg);
      -o-transform: rotateY(-180deg);
      -ms-transform: rotateY(-180deg);
      transform: rotateY(-180deg);
      position: relative;
      padding: 48px 45px 45px;
      border: 2px solid #e62b4a;
      width: 100%;

      & i,
      h3 {
        color: #ffffff;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const flipper = css`
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -moz-transition: 0.6s;
  -moz-transform: perspective(1000px);
  -moz-transform-style: preserve-3d;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;

  -webkit-transform-origin: 100% 213.5px;
  -moz-transform-origin: 100% 213.5px;
  -ms-transform-origin: 100% 213.5px;
  transform-origin: 100% 213.5px;
`;

export const front = css``;

export const back = css``;

export const customColumn = css`
  .col-lg-3 {
    width: 20%;
    flex: 0 0 20%;
    @media (min-width: 320px) and (max-width: 767px) {
      width: 100%;
      flex: 0 0 100%;
    }
    @media (min-width: 768px) and (max-width: 990px) {
      width: 33.33333333%;
      flex: 0 0 33.33333%;
    }
  }
`;
