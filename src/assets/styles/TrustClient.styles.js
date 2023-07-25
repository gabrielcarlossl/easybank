/** @jsx jsx */
import { css } from "@emotion/react";

export const trustClient = css`
  padding: 0 0 0;
  margin-top: -210px !important;
  z-index: 5;
`;

export const clContent = css`
  position: relative;

  & img {
    max-width: 100%;
    height: auto;
  }
`;

export const abcInner = css`
  position: relative;
  margin-top: -477px;
  z-index: 2;
`;

export const abcContent = css`
  position: relative;
  background: #fff;
  padding: 87px 0 0 100px;
  margin-left: -17px;

  & h2 {
    font-size: 50px;
    letter-spacing: 2px;
    color: #000000;
    line-height: 63px;
    text-transform: uppercase;
    margin: 0 0 43px;
  }

  & p {
    margin-bottom: 55px;
  }
`;
