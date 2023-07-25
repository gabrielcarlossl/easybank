/** @jsx jsx */
import { css } from '@emotion/react'
import lineMarker from '../images/line-maker.svg'

export const popUp = css`
  background: #fff;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -moz-box;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  height: 270px;
  opacity: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  position: fixed;
  top: 0;
  left: 0;
  visibility: hidden;
  transform: translateY(-100%);
  transition: all 0.6s 0s cubic-bezier(0.7, 0, 0.3, 1);
  width: 100%;
  z-index: 1;
  border-radius: 8px;
  overflow-y: hidden;
`

export const showOverlayNav = css`
  overflow: hidden;

  .popup-inner {
    transform: translateY(0);
  }

  .popup.popup__menu {
    opacity: 1;
    overflow-x: hidden;
    overflow-y: hidden;
    visibility: visible;
    transform: translateY(0);
    top: 130px;
    width: 90%;
    margin-left: 5%;
    box-shadow: 0.1px 0.4px 175.8px rgba(0, 0, 0, 0.667),
      1.3px 9.3px 218.5px rgba(0, 0, 0, 0.641),
      4.3px 30.8px 233.5px rgba(0, 0, 0, 0.582),
      9.1px 65.6px 226.5px rgba(0, 0, 0, 0.513),
      16px 115px 153px rgba(0, 0, 0, 0.44);
  }
`

export const popUpMenu = css`
  background-image: url(${lineMarker});
  background-repeat: repeat;
  background-position: center center;
  padding: 0;
`

export const closepopUp = css`
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 0px #fff;
  font-weight: 600;
  height: 50px;
  width: 50px;
  position: absolute;
  right: 30px;
  top: 30px;
  transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
  -moz-transition: all 0.5s cubic-bezier(0.7, 0, 0.3, 1);
  z-index: 99;

  &:hover {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);
    -moz-box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.2);
  }

  &:after {
    width: 15px;
    height: 1px;
    background: #000;
    position: absolute;
    right: 17.5px;
    top: 24px;
    content: '';
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
    content: '';
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transition: all ease 400ms;
    -webkit-transition: all ease 400ms;
    -moz-transition: all ease 400ms;
  }
`

export const footerContacts = css`
  position: absolute;
  left: 0;
  bottom: 40px;
  margin: 0;
  padding-left: 0;

  li {
    list-style: none;
    display: block;
    font-size: 16px;
    color: #313445;
    line-height: 22px;
    margin: 0 0 7px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const logo2 = css`
  z-index: 99;
  position: absolute;
  left: 0;
  top: 30px;
`

export const popUpInner = css`
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -moz-box;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transform: translateY(-100%);
  transition: all 0.6s 1000ms cubic-bezier(0.7, 0, 0.3, 1);
  width: 100%;
`

export const dlMenuWrap = css`
  height: auto;
  position: relative;
  perspective: 600px;
  perspective-origin: 50% -200%;
  text-align: center;
  transition: all 0.6s 0s cubic-bezier(0.7, 0, 0.3, 1);
  width: 100%;

  button {
    border: none;
    background-color: transparent;
    outline: none;
    color: #313445;
  }

  ul {
    list-style: none;
    padding: 0;
    transform-style: preserve-3d;

    li {
      margin: 20px 0;
      position: relative;
      display: block;

      .menu-item-has-children > a {
        position: relative;
      }

      button {
        position: relative;
        transition: transform 500ms ease;

        :hover {
          transform: rotate(-180deg);
        }
      }

      a {
        color: #313445;
        font-size: 16px;
        line-height: 0.8;
        letter-spacing: 1px;
        font-weight: 400;
        position: relative;
        display: inline-block;
        text-decoration: none;
        -webkit-text-decoration-skip: objects;
        transition: all 0.6s cubic-bezier(0.7, 0, 0.3, 1);

        &:hover {
          &::after {
            width: 100%;
          }
        }

        &::after {
          position: absolute;
          width: 0;
          height: 1px;
          content: '';
          background: #fff;
          left: 0;
          right: 0;
          bottom: -5px;
          -webkit-transition: all 0.6s 0s cubic-bezier(0.7, 0, 0.3, 1);
          -moz-transition: all 0.6s 0s cubic-bezier(0.7, 0, 0.3, 1);
          transition: all 0.6s 0s cubic-bezier(0.7, 0, 0.3, 1);
          z-index: -1;
        }
      }
    }
  }
`

export const subMenu = css`
  display: none;
  &.hide {
    display: none;
  }
  &.show {
    display: block;
  }
`
