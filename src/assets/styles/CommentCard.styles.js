/** @jsx jsx */
import { css } from "@emotion/react";

export const singleComment = css`
  position: relative;
  padding-left: 143px;
  padding-right: 100px;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 55px;
  margin-bottom: 60px;

  img {
    width: 110px;
    height: 110px;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const authorDetails = css`
  position: relative;

  h5 {
    font-size: 20px;
    line-height: 0.8;
    color: #000000;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin: 0 0 10px;

    a {
      color: #000;

      &:hover {
        color: #e62b4a;
      }
    }
  }

  span {
    display: block;
    font-size: 12px;
    line-height: 30px;
    color: #e62b4a;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin: 0 0 27px;
  }
`;

export const comment = css`
  position: relative;
  margin: 0 0 0;

  p {
    line-height: 30px;
    margin: 0;
  }
`;

export const commentBt = css`
  position: absolute;
  right: 0;
  top: 0;
  height: 50px;
  font-size: 14px;
  letter-spacing: 1.4px;
  padding: 19px 21px;
`;
