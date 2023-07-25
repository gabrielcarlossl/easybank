/** @jsx jsx */
import { css } from "@emotion/react";

export const singleFolio = css`
  position: relative;
  overflow: hidden;
  margin: 0 0 30px;

  &:hover {
    img {
      transform: scale(1.1) rotate(2deg);
      -moz-transform: scale(1.1) rotate(2deg);
      -webkit-transform: scale(1.1) rotate(2deg);
      -ms-transform: scale(1.1) rotate(2deg);
      -o-transform: scale(1.1) rotate(2deg);
      -webkit-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
    }
    div {
      visibility: visible;
      opacity: 1;
      left: 50px;
    }
    &:after {
      width: 100%;
    }
  }

  & img {
    display: block;
    width: 100%;
    height: auto;
    -webkit-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;
  }

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(230, 43, 74, 0.8);
    overflow: hidden;
    width: 0;
    height: 100%;
    content: "";
    transition: all 0.4s ease-out;
    -moz-transition: all 0.4s ease-out;
    -webkit-transition: all 0.4s ease-out;
    -o-transition: all 0.4s ease-out;
  }

  & div {
    & h4 {
      font-size: 20px;
      line-height: 0.8;
      color: #fff;
      letter-spacing: 0.8px;
      margin: 0;
      text-transform: uppercase;

      & a {
        color: #fff;
        transition: all ease 400ms;
        -webkit-transition: all ease 400ms;
        -moz-transition: all ease 400ms;

        &:hover {
          color: #000;
        }
      }
    }
  }
`;
export const folioHover = css`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 20px;
  bottom: 50px;
  z-index: 3;
  transition: all ease 900ms;
  -moz-transition: all ease 900ms;
  -webkit-transition: all ease 900ms;
  -o-transition: all ease 900ms;
`;

export const cate = css`
  font-size: 12px;
  line-height: 32px;
  color: #fff;
  display: block;
  letter-spacing: 1.2px;
  margin: 0 0 3px;
  text-transform: uppercase;
  transition: all ease 400ms;
  -webkit-transition: all ease 400ms;
  -moz-transition: all ease 400ms;

  &:hover {
    color: #000;
  }
`;
