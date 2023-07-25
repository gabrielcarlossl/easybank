/** @jsx jsx */
import { css } from "@emotion/react";

export const latestBlogItem = css`
  position: relative;
  background: #fff;
  margin: 0 0 51px;
`;

export const lbiThumb = css`
  overflow: hidden;
  position: relative;

  & img {
    width: 100%;
    height: auto;
  }
`;

export const lbiDetails = css`
  text-align: left;
  margin: 0 10px;
  position: relative;
  margin-top: -20px;
  padding: 30px 30px 0;
  background: #fff;
  z-index: 3;

  & > a:first-child {
    font-size: 10px;
    line-height: 0.8;
    letter-spacing: 1px;
    font-weight: 700;
    display: block;
    height: 31px;
    width: 65px;
    background: #000;
    color: #fff;
    padding: 11px 0;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 15px;

    &:hover {
      color: #fff;
      background: #e62b4a;
    }
  }

  & a:nth-child(3){
    display: inline-block;
    font-size: 12px;
    line-height: 0.8;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    color: #000;
    position: relative;

    &:hover{
        color: #e62b4a;
        &:after{
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

  & h2 {
    font-size: 26px;
    line-height: 32px;
    letter-spacing: 1.04px;
    text-transform: uppercase;
    color: #000;
    margin: 0 0 13px;

    a {
      color: #000;

      &:hover {
        color: #e62b4a;
      }
    }
  }

  
`;
