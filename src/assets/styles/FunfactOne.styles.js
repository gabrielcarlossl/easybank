/** @jsx jsx */
import { css } from "@emotion/react";
import bg2 from "../images/bg/2.jpg";

export const funfact = css`
  background: url(${bg2}) no-repeat center center / cover;
  padding: 0 0 330px !important;
`;

export const singleFunfact = css`
  position: relative;
  padding-top: 113px;

  & h1 {
    font-size: 60px;
    line-height: 1;
    letter-spacing: 2.4px;
    font-weight: 300;
    color: #fff;
    margin: 0 0 25px;
  }

  & h3 {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 0.8;
    color: #aaaaaa;
    letter-spacing: 1.6px;
    margin: 0;
  }
`;
