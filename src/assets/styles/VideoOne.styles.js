/** @jsx jsx */
import { css } from "@emotion/react";

export const ourWork = css`
  background: #f4f4f4;
  overflow: hidden;
  padding-bottom: 59px;
  position: relative;
`;

export const videoWrap2 = css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 50%;
  z-index: 10;

  div h2 {
    color: #fff;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const abDetailWrap = css`
  padding-left: 90px;

  p {
    line-height: 36px;
  }

  h2 {
    margin-bottom: 46px;
  }
`;

export const playVideo = css`
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  a.video_popup {
    display: inline-block;
    width: 115px;
    height: 115px;
    border-radius: 0;
    position: relative;
    background: #e62b4a;
    color: #fff;
    font-size: 30px;
    line-height: 0.8;
    padding: 42px 0;
    margin-bottom: 31px;

    &:hover {
      background: #000;
      color: #fff;
    }
  }

  h2 {
  font-size: 50px;
  line-height: 1;
  letter-spacing: 2px;
  color: #000;
  text-transform: uppercase;
  margin: 0;
}
`;
