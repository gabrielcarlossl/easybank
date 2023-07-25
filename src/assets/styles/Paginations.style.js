/** @jsx jsx */
import { css } from "@emotion/react";

export const meipalyPaginations = css`
  a {
    position: relative;
    display: inline-block;
    height: 46px;
    width: 45px;
    background: #f4f4f4;
    color: #818181;
    font-size: 14px;
    letter-spacing: 0.56px;
    text-align: center;
    padding: 17px 0;
    line-height: 0.8;
    margin: 0 3px;
    -webkit-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;

    &:hover {
      color: #fff;
      background: #000;
      &:after {
        height: 100%;
        visibility: visible;
        opacity: 1;
      }
    }

    &.next,
    &.prev {
      font-size: 20px;
      padding: 12px 0;
      margin: 0 2px;
      &:after {
        right: auto;
        left: 0;
      }
    }

    &:after {
      width: 4px;
      height: 0;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto 0;
      content: "";
      background: #e62b4a;
      visibility: hidden;
      opacity: 0;
      -webkit-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
    }
  }

  span {
    position: relative;
    display: inline-block;
    height: 46px;
    width: 45px;
    background: #f4f4f4;
    color: #818181;
    font-size: 14px;
    letter-spacing: 0.56px;
    text-align: center;
    padding: 17px 0;
    line-height: 0.8;
    margin: 0 3px;
    -webkit-transition: all 0.4s ease-out;
    transition: all 0.4s ease-out;

    &:after {
      width: 4px;
      height: 0;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto 0;
      content: "";
      background: #e62b4a;
      visibility: hidden;
      opacity: 0;
      -webkit-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
    }
    &.current {
      color: #fff;
      background: #000;
      &:after {
        height: 100%;
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;
