/** @jsx jsx */
import { css } from "@emotion/react";
import shadow from "../images/shadow.png";

export const iconBox2 = css`
  position: relative;
  width: 100%;
  background: #fff;
  border: 2px solid #f4f4f4;
  padding: 50px 65px 50px;
  transition: all ease 500ms;
  -moz-transition: all ease 500ms;
  -webkit-transition: all ease 500ms;

  &:hover {
    -webkit-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
    border-color: transparent;

    &:after {
      visibility: visible;
      opacity: 1;
      height: 101%;
    }
  }

  &:after {
    width: 4px;
    height: 0;
    position: absolute;
    content: "";
    right: -1px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    content: "";
    background: #e62b4a;
    visibility: hidden;
    opacity: 0;
    z-index: 3;
    transition: all ease 500ms;
    -moz-transition: all ease 500ms;
    -webkit-transition: all ease 500ms;
  }

  h3 {
    font-size: 20px;
    letter-spacing: 0.8px;
    color: #000;
    line-height: 32px;
    text-transform: uppercase;
    margin: 0 0 35px;
  }

  p {
    margin: 0 0 31px;
  }

  a {
    display: inline-block;
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #000;
    line-height: 0.8;
    text-transform: uppercase;
    margin: 0;

    &:hover {
      color: #e62b4a;
    }
  }
`;

export const iconWrap = css`
  position: relative;
  margin: 0 0 44px;

  &:after {
    background: url(${shadow}) no-repeat center center / cover;
    height: 7px;
    width: 75px;
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    bottom: -17px;
    margin: 0 auto;
    z-index: 2;
  }

  i{
    font-size: 64px;
  font-style: normal;
  color: #000;
  display: inline-block;
  margin: 0 0 0;
  }
`;
