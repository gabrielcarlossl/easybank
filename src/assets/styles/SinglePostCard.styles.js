/** @jsx jsx */
import { css } from "@emotion/react";

export const singleBlog = css`
  position: relative;
`;

export const blogThumb = css`
  position: relative;
  margin: 0 0 0;

  img {
    width: 100%;
    height: auto;
  }
`;

export const blogHeadings = css`
  position: relative;
  margin: -20px 10px 29px;
  background: #fff;
  z-index: 3;
  padding: 30px 30px 0;

  h2 {
    text-transform: uppercase;
    font-size: 40px;
    color: #000000;
    line-height: 40px;
    letter-spacing: 1.6px;
    margin: 0 0 7px;
  }
`;

export const blogDate = css`
  font-size: 10px;
  line-height: 0.8;
  letter-spacing: 1px;
  font-weight: 700;
  display: block;
  height: 31px;
  width: 65px;
  background: #e62b4a;
  color: #ffffff;
  padding: 11px 0;
  text-align: center;
  text-transform: uppercase;
  margin: 0 0 20px;
`;

export const blogMetas = css`
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 1.2px;
  color: #818181;
  text-transform: uppercase;
  margin: 0;

  a {
    display: inline-block;
    color: #818181;
    margin: 0 10px;

    &:hover {
      color: #e62b4a;
    }

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const blogDetails = css`
  padding: 0px 40px 22px;

  p {
    line-height: 30px;
    margin: 0 0 30px;
  }
`;

export const blogTagItens = css`
  position: relative;
  border-top: 1px solid #e7e7e7;
  padding: 34px 0 35px;

  span {
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    display: inline-block;
    letter-spacing: 0.8px;
    margin-right: 3px;
  }

  a {
    display: inline-block;
    color: #818181;
    line-height: 30px;
    font-size: 16px;

    &:hover {
      color: #000;
    }
  }
`;

export const postAuthor = css`
  position: relative;
  background: #f4f4f4;
  padding: 57px 70px 60px 270px;
  margin-bottom: 60px;

  p {
    line-height: 30px;
    margin: 0 0 16px;
  }

  img {
    width: 170px;
    height: 190px;
    position: absolute;
    left: 60px;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

  h3 {
    font-size: 20px;
    line-height: 0.8;
    color: #000000;
    letter-spacing: 0.8px;
    margin: 0 0 39px;

    a {
      color: #000;

      &:hover {
        color: #e62b4a;
      }
    }
  }

  & > a {
    color: #e62b4a;
    line-height: 0.8;
    display: inline-block;
    position: relative;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-size: 12px;

    &:hover {
      color: #000;
      &:after {
        background: #000;
      }
    }

    &:after {
      width: 100%;
      height: 1px;
      content: "";
      background: #e62b4a;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: -5px;
      -webkit-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
    }
  }
`;

