/** @jsx jsx */
import { css } from "@emotion/react";
import bg8 from "../images/bg/8.jpg";

export const pageBanner = css`
  position: relative;
  min-height: 465px;
  background: url(${bg8}) no-repeat center center / cover;
  padding-top: 224px;
`;

export const bannerContent = css`
  position: relative;

  h2 {
    font-size: 70px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 2.8px;
    margin: 0;
    color: #fff;
    text-transform: uppercase;
  }

  h4 {
    color: #fff;
    font-size: 18px;
    line-height: 36px;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    margin: 0 0 12px;

    a {
      color: #fff;
      display: inline-block;
      &:hover {
        color: #000;
      }
    }
  }
`;
