/** @jsx jsx */
import { css } from "@emotion/react";
import bg4 from "../images/bg/4.jpg";
import bg6 from "../images/bg/6.jpg";

export const ready = css`
  background: url(${bg4}) no-repeat center center / cover;

  a {
    @media (min-width: 320px) and (max-width: 767px) {
      float: left;
      margin-top: 30px;
    }
  }
`;

export const ready2 = css`
  background: url(${bg6}) no-repeat center center / cover;

  h2{
    margin:0;
  }

  a {
    padding: 28px 42.5px;
    background: #fff;
    color: #000;

    @media (min-width: 320px) and (max-width: 767px) {
      float: left;
      margin-top: 30px;
    }
  }
`;
