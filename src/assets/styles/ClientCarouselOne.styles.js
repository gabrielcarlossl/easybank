/** @jsx jsx */
import { css } from "@emotion/react";

export const client = css`
  background: #f4f4f4;
`;

export const singleClient = css`
  position: relative;
  width: 100%;
  height: 208px;
  margin-bottom: 30px;
  background: #fff;
  text-align: center;
  transition: all ease 500ms;
  -moz-transition: all ease 500ms;
  -webkit-transition: all ease 500ms;

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

  &:hover {
    -webkit-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 10px 35px 0px rgba(0, 0, 0, 0.05);

    &:after {
      visibility: visible;
      opacity: 1;
      height: 100%;
    }
    & a img {
      opacity: 1;
    }
  }

  & a {
    width: 100%;
    height: 100%;
    text-align: center;
    display: inline-block;

    img {
      max-width: 119px;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      opacity: 0.4;
      display: inline-block !important;
      transition: all ease 500ms;
      -moz-transition: all ease 500ms;
      -webkit-transition: all ease 500ms;
    }
  }
`;

export const clientSlider = css`

.owl-controls .owl-nav {
  display: none;
}

.owl-controls .owl-dots {
  line-height: 0.8;
  text-align: center;
  margin-top: 27px;
}

.swiper-pagination-bullet,
.owl-controls .owl-dots .owl-dot span {
  line-height: 0.8;
  width: 10px;
  height: 10px;
  border-radius: 0;
  margin: 0 3px;
  padding: 0;
  background: #dbdbdb;
  -webkit-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
  opacity: 1;
}

.swiper-pagination-bullet-active,
.swiper-pagination-bullet:hover,
.owl-controls .owl-dots .owl-dot.active span,
.owl-controls .owl-dots .owl-dot:hover span {
  background: #000000;
}

.swiper-pagination {
  position: relative;
  width: 100%;
  left: auto;
  top: auto;
  margin-top: 25px;
}

`
