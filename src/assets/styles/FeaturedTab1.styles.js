/** @jsx jsx */
import { css } from "@emotion/react";

export const chooseUsTitle = css`
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 33.33333333%;
    display: inline-block;
    position: relative;
    float: left;

    &:hover,
    &.active {
      a {
        background: #000;
        color: #fff;
      }
    }

    a {
      display: block;
      font-size: 20px;
      line-height: 0.8;
      color: #000000;
      letter-spacing: 0.8px;
      background: #f4f4f4;
      padding: 49px 0;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
    }
  }
`;

export const chooseImg = css`
  position: relative;
  margin: 60px 0 0;

  img {
    width: 100%;
    height: auto;
  }
`;

export const whChoose = css`
  position: relative;
  margin: 51px 0 0;

  p {
    margin: 0 0 25px;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      display: block;
      line-height: 36px;

      i {
        font-size: 14px;
        color: #e62b4a;
        line-height: 32px;
        margin-right: 15px;
      }
    }
  }
`;
