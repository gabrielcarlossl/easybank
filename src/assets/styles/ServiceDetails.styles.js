/** @jsx jsx */
import { css } from "@emotion/react";

export const serviceDetail = css`
  padding-bottom: 82px;
`;

export const serviceArea = css`
  position: relative;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 57px;
  }

  h2 {
    text-transform: uppercase;
    color: #222232;
    line-height: 0.8;
    font-size: 50px;
    letter-spacing: 2px;
    margin-bottom: 34px;
  }

  p {
    margin: 0 0 31px;
  }

  h3 {
    line-height: 0.8;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #000000;
    font-size: 30px;
    margin-bottom: 50px;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      display: inline-block;
      line-height: 32px;
      font-size: 16px;

      i {
        color: #e62b4a;
        margin-right: 10px;
        line-height: 36px;
      }
    }
  }
`;

export const gaping = css`
  padding: 24px 0 0;

  img {
    margin-bottom: 52px;
  }
`;
