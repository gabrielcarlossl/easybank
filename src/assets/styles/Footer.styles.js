/** @jsx jsx */
import { css } from "@emotion/react";


export const footer1 = css`
  position: relative;
  padding: 130px 0 0;
  background: black;
`;

export const widget = css`
  position: relative;
  padding: 0 0 112px;

  h3 {
    font-size: 18px;
    letter-spacing: 0.72px;
    color: #fff;
    line-height: 0.8;
    margin: 0 0 43px;
    position: relative;
    text-transform: uppercase;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding-bottom: 40px;
    padding-left: 0;
  }
`;

export const aboutWidget = css`
  padding-right: 110px;
  margin-top: -8px;

  & img {
    max-width: 100%;
    height: auto;
    margin-bottom: 34px;
  }

  & p {
    font-size: 14px;
    letter-spacing: 0.56px;
    color: #aaaaaa;
    margin: 0;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding-right: 0;
    margin-top: 0;
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-right: 0;
  }
`;

export const contactWidget = css`
  padding-left: 60px;

  & p {
    font-size: 14px;
    letter-spacing: 0.56px;
    color: #aaaaaa;
    margin: 0;

    &:first-of-type {
      margin-bottom: 32px;
      @media (min-width: 320px) and (max-width: 767px) {
        margin-bottom: 15px;
      }
    }

    & a {
      color: #aaaaaa;
      &:hover {
        color: #e62b4a;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    padding-left: 0;
  }
`;

export const copyright = css`
  border-top: 1px solid #1a1a1a;
  font-size: 14px;
  line-height: 0.8;
  color: #aaaaaa;
  text-transform: uppercase;
  padding: 41px 0;

  & a {
    color: #aaaaaa;
    &:hover {
      color: #e62b4a;
    }
  }
`;

export const socialWidget = css`
  & ul {
    margin: 0;
    padding: 0;
    & li {
      padding: 0;
      margin: 0 0 0;
      list-style: none;
      display: block;
      & a {
        font-size: 14px;
        letter-spacing: 0.56px;
        color: #aaaaaa;
        margin: 0;
        display: block;
        text-align: left;
        &:hover {
          color: #fff;
        }
        & i {
          font-size: 16px;
          color: #fff;
          margin-right: 12px;
        }
      }
    }
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding-bottom: 80px;
  }
`;
