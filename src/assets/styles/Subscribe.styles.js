/** @jsx jsx */
import { css } from "@emotion/react";

export const subscribe = css`
  padding: 100px 0 72px;
  border-bottom: 1px solid #e7e7e7;
`

export const subscribeFrom = css`
  position: relative;
  text-align: right;

  @media (min-width: 320px) and (max-width: 767px) {
    text-align: left;
  }

  & input[type="email"] {
    width: 470px;
    height: 70px;
    background: #f4f4f4;
    color: #818181;
    line-height: 70px;
    font-weight: 400;
    letter-spacing: 0.56px;
    padding-left: 30px;
    border: none;
    outline: none;

    &::-moz-placeholder,
    &::-ms-input-placeholder,
    &::-webkit-input-placeholder {
      color: #818181 !important;
      opacity: 1 !important;
    }

    @media (min-width: 320px) and (max-width: 767px) {
      width: 100%;
      margin-bottom: 15px;
    }
  }

  button {
    @media (min-width: 320px) and (max-width: 767px) {
      margin-left: 0;
    }
  }
`;
