/** @jsx jsx */
import { css } from "@emotion/react";
import { lineMarker } from "@/images/line-maker.svg";

export const searchFixed = css`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(17, 17, 17, 0.98);
  left: 0;
  top: 0;
  z-index: 9999;
  display: none;
`;

export const popUpBg = css`
  background-image: url(${lineMarker});
  background-repeat: repeat;
  background-position: center center;
  padding: 0;
`;

export const searchForms = css`
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  button[type="submit"] {
    padding: 0 0;
    outline: none;
    border: none;
    background: transparent;
    font-size: 24px;
    line-height: 0.9;
    color: #fff;
    position: absolute;
    height: 100%;
    width: 60px;
    text-transform: uppercase;
    right: 15px;
    top: -2px;
    text-align: center;
    transition: all ease 400ms;
    -webkit-transition: all ease 400ms;
    -moz-transition: all ease 400ms;

    &:hover {
      color: #e62b4a;
    }
  }

  input {
    width: 100%;
    height: 91px;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    background: none;
    font-size: 24px;
    color: #fff;
    text-transform: uppercase;
    padding-left: 10px;
    font-weight: 300;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &::placeholder,
    &::-webkit-input-placeholder,
    &::-ms-input-placeholder,
    &::-moz-placeholder {
      color: #fff;
      opacity: 1;
    }
  }
`;

export const sfCloser = css`
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 0px #fff;
  font-weight: 600;
  height: 50px;
  width: 50px;
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 30px;
  text-transform: uppercase;
  transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
  -moz-transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
  z-index: 99;

  &:hover {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);

    &:after,
    &:before {
      background: #e62b4a;
    }
  }

  &:after {
    width: 15px;
    height: 1px;
    background: #000;
    position: absolute;
    right: 17.5px;
    top: 24px;
    content: "";
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transition: all ease 400ms;
    -webkit-transition: all ease 400ms;
    -moz-transition: all ease 400ms;
  }

  &:before {
    width: 15px;
    height: 1px;
    background: #000;
    position: absolute;
    right: 17.5px;
    top: 24px;
    content: "";
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transition: all ease 400ms;
    -webkit-transition: all ease 400ms;
    -moz-transition: all ease 400ms;
  }
`;
