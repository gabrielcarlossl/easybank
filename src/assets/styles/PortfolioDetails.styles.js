/** @jsx jsx */
import { css } from "@emotion/react";

export const porfolioDetail = css`
  padding-bottom: 0;
`;

export const portDetailThumb = css`
  position: relative;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const singlePortfolioContent = css`
  position: relative;
  margin: 0 0 35px;

  h3 {
    font-size: 30px;
    line-height: 0.8;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 1.04px;
    margin: 0 0 39px;
  }

  h4 {
    font-size: 18px;
    line-height: 0.8;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 0.72px;
    margin: 0 0 9px;
  }

  p {
    line-height: 30px;
    margin: 0;

    a {
      display: inline-block;
      color: #818181;

      &:hover {
        color: #e62b4a;
      }
    }
  }

  ul {
    margin: 17px 0 0;
    padding: 0;

    li {
      list-style: none;
      display: block;
      line-height: 0.8;
      margin: 0 0 17px;

      a {
        color: #818181;
        font-size: 12px;
        text-transform: uppercase;
        line-height: 0.8;
        letter-spacing: 1.2px;
        display: inline-block;
        position: relative;

        &:hover {
          color: #e62b4a;

          &:after {
            width: 100%;
          }
        }

        &:after {
          width: 0;
          height: 1px;
          content: "";
          background: #e62b4a;
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          bottom: -4px;
          -webkit-transition: all 0.4s ease-out;
          transition: all 0.4s ease-out;
        }
      }
    }
  }
`;
