/** @jsx jsx */
import { css } from "@emotion/react";

export const sidebarWidget = css`
  position: relative;
  margin-bottom: 30px;
`;

export const sidebarSearchWidget = css`
  padding: 0;
`;

export const sidebarSearchForm = css`
  margin: 0;
  padding: 0;

  input {
    width: 100%;
    height: 91px;
    border: none;
    border-radius: 0;
    background: #000;
    font-size: 14px;
    letter-spacing: 1.4px;
    line-height: 30px;
    color: #ffffff;
    padding: 0 50px;
    text-transform: uppercase;
    outline: none;

    &::placeholder,
    &::-webkit-input-placeholder,
    &::-ms-input-placeholder,
    &::-moz-placeholder {
      color: #ffffff !important;
      opacity: 1 !important;
    }
  }
`;

export const sidebarWidgetTitle = css`
  font-size: 18px;
  text-transform: uppercase;
  line-height: 0.8;
  letter-spacing: 0.72px;
  margin: 0 0 -2px;
  padding: 23px 48px 24px;
  border: 2px solid #f4f4f4;
`;

export const meipalyPostWidget = css`
  position: relative;
  background: #f4f4f4;
  padding: 50px;
`;

export const mpwItem = css`
   position: relative;
  padding-left: 80px;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 20px;
  padding-bottom: 21px;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  img {
    width: 60px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
  }

  a {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 24px;
    color: #818181;
    display: inline-block;
    margin: 3px 0 0;

    &:hover {
      color: #000;
    }
  }
`;

export const meipalyCategorieWidget = css`
  position: relative;
  background: #f4f4f4;
  padding: 43px 50px 44px;

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      display: block;
      margin: 0 0 12px;

      a {
        display: inline-block;
        font-size: 16px;
        line-height: 22px;
        color: #818181;

        &:hover {
          color: #000;
        }
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

export const meipalyTagcloudWidget = css`
  position: relative;
  background: #f4f4f4;
  padding: 43px 50px 44px;

  a {
    display: inline-block;
    font-size: 16px;
    line-height: 30px;
    color: #818181;

    &:hover {
      color: #000;
    }
  }
`;
