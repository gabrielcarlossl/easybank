/** @jsx jsx */
import { css } from "@emotion/react";
// import shadow from "../images/shadow.png";

export const whatWeDo2 = css`
  background: #f4f4f4;
`;

export const singleWedo = css`
  position: relative;
  overflow: hidden;
  -moz-transition: all 0.4s ease-out;
  -webkit-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;

  img {
    width: 100%;
    height: auto;
  }

  .overlay_wedo {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    margin: auto;
    -moz-transition: all 0.4s ease-out;
    -webkit-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;

    a {
      height: 68px;
      color: #000000;
      line-height: 0.8;
      font-size: 18px;
      letter-spacing: 0.72px;
      text-transform: uppercase;
      display: inline-block;
      background: #fff;
      text-align: center;
      padding: 26px 0;
      width: 240px;
      z-index: 9;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: auto;

      &:hover {
        color: #fff;
        background: #000;
      }
    }

    &:after {
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      left: 0;
      margin: auto;
      background: rgba(230, 43, 74, 0.7);
      overflow: hidden;
      width: 0;
      height: 100%;
      content: "";
      visibility: hidden;
      opacity: 0;
      -moz-transition: all 0.4s ease-out;
      -webkit-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
    }
  }

  &:hover {
    .overlay_wedo:after {
      width: 100%;
      opacity: 1;
      visibility: visible;
    }
  }
`;
