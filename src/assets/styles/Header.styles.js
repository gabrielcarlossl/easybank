/** @jsx jsx */
import { css } from "@emotion/react";

export const header = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 5;
  background: #fff;
  padding: 39px 40px 0 45px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  color: #C5C4CA;
  .header {
    @media (min-width: 500px) {
      
      margin-right: 10%;
      margin-left: 10%;
    }
  }

  &.fixedHeader {
    background-color: #fff;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }

  &.black_color {
    border-color: #e5e5e5;

    &.fixedHeader {
      background-color: #ffffff;
    }

    nav ul li a {
      color: #000000;
      &:after {
        background-color: #000000;
      }
    }

    nav ul ul {
      background-color: #ffffff;
      &:before {
        border-bottom: 5px solid #fff;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding: 39px 0 0;
  }
`;

export const logo = css`
  display: flex;
  justify-content: center;
  padding: 0 0 39px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const mainMenu = css`
  position: relative;

  ul {
    margin: 0;
    padding: 0;

    & li {
      list-style: none;
      display: inline-block;
      line-height: 0.8;
      padding: 0 20px 53px;
      position: relative;

      & > .active a {
        color:  #94959A;
        &:after {
          width: 100%;
        }
      }

      & a {
        display: block;
        color:  #94959A;
        font-size: 16px;
        line-height: 0.8;
        position: relative;

        &:hover {
          color:  #94959A;
          &:after {
            width: 100%;
            background-color: #ffffff;
          }
        }

        &:after {
          position: absolute;
          width: 0;
          height: 1px;
          content: "";
          background: #fff;
          left: 0;
          right: 0;
          bottom: -5px;
          -moz-transition: all 0.4s ease-out;
          -webkit-transition: all 0.4s ease-out;
          transition: all 0.4s ease-out;
        }
      }

      &:hover .sub-menu {
        visibility: visible;
        opacity: 1;
        top: 66px;
      }
    }

    & ul.sub-menu {
      padding: 25px 30px 13px;
      & li {
        margin: 0;
        padding: 0 0 13px;
        display: block;
        & a {
          font-size: 14px;
          line-height: 1.5;
          display: inline-block;
          &:after {
            bottom: 0;
          }
        }
      }
    }
  }
`;

export const inviteBtn = css`
@media (max-width: 1050px) {
  display: none;
}
`

export const navigator = css`
  @media (min-width: 850px) {
    display: none;
  }
  position: relative;
  padding: 6px 0 37px;
  & a {
    display: inline-block;
    color:  #56565F;
    line-height: 0.8;
    font-size: 25px;
    margin: 0;

    &.search {
      margin-right: 16px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding-top: 0;

    & a {
      &.search {
        margin-right: 10px;
      }
    }
  }
`;
