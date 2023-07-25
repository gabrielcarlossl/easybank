/** @jsx jsx */
import { css } from "@emotion/react";

export const agencyImg1 = css`
  position: relative;
  text-align: right;

  &:after {
    position: absolute;
    right: 60px;
    top: 60px;
    border: 10px solid #e62b4a;
    height: 464px;
    width: 530px;
    content: "";
    z-index: 6;
  }

  img {
    max-width: 100%;
    height: auto;
    -webkit-box-shadow: -2px 4px 35px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 4px 35px 0px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 4px 35px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const agencyImg2 = css`
  position: relative;
  text-align: left;
  z-index: 4;
  margin-top: -184px;

  img {
    max-width: 100%;
    height: auto;
    -webkit-box-shadow: -2px 4px 35px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -2px 4px 35px 0px rgba(0, 0, 0, 0.3);
    box-shadow: -2px 4px 35px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const companyDate = css`
  position: absolute;
  right: 60px;
  bottom: 3px;
  z-index: 4;

  h2 {
  font-size: 110px;
  line-height: 0.9;
  letter-spacing: 4.4px;
  color: #000;
  margin: 0;
}

h5 {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.2px;
  line-height: 0.8;
  color: #000;
  margin: 0 0 3px;
}
`
