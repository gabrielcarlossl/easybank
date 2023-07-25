/** @jsx jsx */
import { css } from "@emotion/react";

export const singleClient2 = css`
  position: relative;
  overflow: hidden;
  background: #fff;
  border: none;
  padding: 40px 15px 46px 50px;
  width: 100%;
  transition: all ease 500ms;
  -moz-transition: all ease 500ms;
  -webkit-transition: all ease 500ms;

  h3 {
    text-transform: uppercase;
    color: #000;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 0.8px;
    margin: 0 0 30px;
  }

  p {
    line-height: 30px;
    margin: 0;
  }

  &:hover {
    -webkit-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
    &:after {
      visibility: visible;
      opacity: 1;
      height: 100%;
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
    transition: all ease 500ms;
    -moz-transition: all ease 500ms;
    -webkit-transition: all ease 500ms;
  }
`;
