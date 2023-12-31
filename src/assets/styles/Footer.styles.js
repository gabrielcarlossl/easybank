/** @jsx jsx */
import { css } from '@emotion/react'

export const footer = css`
  position: relative;
  padding: 100px 0;
  background: #2d314d;
  height: fit-content;
  @media (max-width: 850px)  {
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    align-items: center;
  }
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    align-items: center;
  }
  
  span {
    color: #fff;
  }
  a {
    color: #fff;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      color: #33d35e;
      text-decoration: none;
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    @media (max-width: 850px) {
      display: flex;
      flex-direction: column;
    }
  }
  .requestBtnSection {
    display: flex;
    flex-direction: column;
    @media (max-width:850px) {
        margin-bottom: 40px;
      }
    div:first-of-type {
      margin-bottom: 30px;
      align-self: flex-end;
      @media (max-width: 850px) {
        align-self: center;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  .flex {
    display: flex;
    gap: 90px;
    div:first-child{
      justify-content: space-between;
    }
    @media (max-width: 850px) {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
  .flex-col {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 25px;
    @media (max-width: 850px) {
      align-items: center;
    }
  }
  .socialIcons{
    display: flex;
    gap: 10px;
    svg:hover {
      cursor: pointer;
      path {
        fill: #33d35e;
      }
    }
  }

  .copyright{
    @media (max-width: 850px) {
      text-align: center;
    }
  }
`
