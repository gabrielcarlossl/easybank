/** @jsx jsx */
import { css } from "@emotion/react";

export const btnLink = css`
  position: relative;
  width: 100%;
  line-height: 0.8;

  a {
    display: inline-block;
    width: 100%;
    height: 143px;
    line-height: 0.8;
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    color: #fff;
    letter-spacing: 0.96px;
    background: #e62b4a;
    padding: 61px 0;

    &:hover {
      background: #000;
      color: #fff;
    }
  }
`;

export const googleMap = css`
  width: 100%;
  height: 609px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }
`;
