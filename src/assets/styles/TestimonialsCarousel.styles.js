/** @jsx jsx */
import { css } from "@emotion/react";
import bg7 from "../images/bg/7.jpg";

export const testimonial2 = css`
  background: url(${bg7}) no-repeat center center / cover;
`;

export const testimonialTab = css`
  position: relative;

  ul {
    margin: 53px 0 0;
    padding: 0;
  }
`;

export const testimonial2Thumb = css`
  margin: 53px 0 0;
  padding: 0;

  .swiper-slide {
    list-style: none;
    display: inline-block;
    opacity: 0.6;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide a {
    display: block;

    span {
      width: 79px;
      height: 79px;
      display: block;
      margin-bottom: 21px;
      position: relative;

      &::after {
        width: 29px;
        height: 29px;
        position: absolute;
        right: 0;
        bottom: 0;
        content: "“";
        background: #e62b4a;
        font-size: 30px;
        line-height: 0.8;
        padding: 11px 0;
        z-index: 9;
        color: #fff;
        text-align: center;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .author_detail {
      position: relative;

      h5 {
        font-size: 16px;
        line-height: 0.8;
        color: #fff;
        margin: 0 0 16px;
        text-transform: uppercase;
      }

      h6 {
        font-size: 12px;
        line-height: 0.8;
        color: #aaaaaa;
        letter-spacing: 1.2px;
        margin: 0;
        text-transform: uppercase;
      }
    }
  }
`;

export const testiCon = css`
  position: relative;
  text-align: left;
  padding-top: 120px;

  p {
    font-size: 24px;
    line-height: 42px;
    letter-spacing: 0.96px;
    color: #fff;
    font-weight: 300;
    margin: 0 0 21px;
  }

  span {
    text-transform: uppercase;
    color: #aaaaaa;
    font-size: 12px;
    letter-spacing: 1.2px;
    line-height: 0.9;
    display: block;
    margin: 0;
  }
`;

export const testiCarouselPagination = css`
  position: absolute;
  right: 15px;
  top: 0;
  z-index: 9;
  bottom: auto;
  left: auto;
  text-align: right;
  line-height: 1;

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 0;
    background: #1a1a1a;
    display: inline-block;
    cursor: pointer;
    margin-left: 5px;
    opacity: 1;
    transition: all ease 500ms;
    -moz-transition: all ease 500ms;
    -webkit-transition: all ease 500ms;
  }

  .swiper-pagination-bullet-active,
  .swiper-pagination-bullet:hover {
    background: #fff;
  }
`;
