/** @jsx jsx */
import { css } from "@emotion/react";
import bg3 from "../images/bg/3.jpg";

export const testimonial = css`
  background: url(${bg3}) no-repeat fixed center / cover;
  padding-bottom: 113px;
`;

export const testimonialContent = css`
  position: relative;
  text-align: center;
  padding: 0 65px;

  & div {
    width: 115px;
    height: 115px;
    background: #e62b4a;
    text-align: center;
    display: inline-block;
    font-size: 64px;
    line-height: 0.8;
    color: #fff;
    padding: 25px 0;
    margin: 0 0 49px;
  }

  & h2 {
    font-size: 50px;
    line-height: 62px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    margin: 0 0 44px;

    span {
      color: #e62b4a;
    }
  }

  & p {
    font-size: 20px;
    color: #fff;
    letter-spacing: 0.8px;
    white-space: pre-line;
    margin: 0;
  }
`;
