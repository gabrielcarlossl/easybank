/** @jsx jsx */
import { css } from "@emotion/react";

export const featured = css`
  background: #f4f4f4;
  overflow: hidden;
`;

export const featuresContent = css`
  padding-right: 30px;
`;

export const singleFeature = css`
  position: relative;
  padding-left: 70px;
  margin-bottom: 56px;

  h3 {
    font-size: 18px;
    line-height: 0.8;
    letter-spacing: 0.72px;
    color: #000;
    text-transform: uppercase;
    margin: 0 0 29px;
  }

  p {
    margin: 0;
  }

  &:last-child {
    margin-bottom: 0;
    &:after {
      display: none;
    }
  }

  &:after {
    position: absolute;
    left: 24px;
    top: 58px;
    content: "";
    width: 2px;
    height: 95px;
    background: #000;
  }
`;

export const fCount = css`
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  text-align: center;
  padding: 18px 0;
  width: 50px;
  height: 48px;
  line-height: 0.8;
  background: #000;
`;

export const featuresImg = css`
  position: relative;
`;

export const imgDetails = css`
  background: #e62b4a;
  display: inline-block;
  padding: 43px 103px 45px 50px;
  position: absolute;
  left: 0;
  bottom: 0;

  h4 {
    margin: 0;
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: pre-line;
  }
`;
