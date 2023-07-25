/** @jsx jsx */
import { css } from "@emotion/react";

export const whatWedo = css`
  position: relative;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 72px;

  &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50%;
    content: "";
    background: #f4f4f4;
  }
`;

export const videoWrap = css`
  position: relative;
  margin-bottom: 100px;

  & img {
    width: 100%;
    height: auto;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 50px;
  }
`;

export const playVideo = css`
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  & a {
    display: inline-block;
    width: 115px;
    height: 115px;
    border-radius: 0;
    position: relative;
    background: #e62b4a;
    color: #fff;
    font-size: 30px;
    line-height: 0.8;
    padding: 42px 0;
    margin-bottom: 31px;

    @media (min-width: 320px) and (max-width: 767px) {
      width: 45px;
      height: 45px;
      font-size: 15px;
      padding: 15px 0;
      margin-bottom: 15px;
    }

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  h2 {
    font-size: 50px;
    line-height: 1;
    letter-spacing: 2px;
    color: #000;
    text-transform: uppercase;
    margin: 0;

    @media (min-width: 320px) and (max-width: 767px) {
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
`;
