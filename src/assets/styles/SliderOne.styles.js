/** @jsx jsx */
import { css } from "@emotion/react";

export const mainSlider = css`
  .swiper-slide {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: -webkit-transform 7000ms ease;
    transition: -webkit-transform 7000ms ease;
    transition: transform 7000ms ease;
    transition: transform 7000ms ease, -webkit-transform 7000ms ease;
  }

  .swiper-slide-active {
    .image-layer {
      -webkit-transform: scale(1.15);
      transform: scale(1.15);
    }

    & h3,
    p,
    a {
      visibility: visible;
      opacity: 1;
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
    }
  }

  & [class*="swiper-button-"]::after {
    display: none;
  }

  & [class*="swiper-button-"] {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.35);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000000;
    font-size: 24px;
    transition: all 500ms ease;
    display: none;
        &:hover {
        background-color: #fff;
        }
        @media (min-width: 768px) {
            width: 70px;
            height: 70px;
            display: flex;
        }
    }

  .container {
    position: relative;
    z-index: 10;
    padding-top: 115px;
  }
  & h3 {
    white-space: pre-line;
    font-size: 40px;
    text-transform: uppercase;
    color: #fff;
    line-height: 1.15em;
    font-weight: 700;
    margin: 0;
    margin-bottom: 30px;
    margin-top: 5px;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(90px);
    transform: translateY(90px);
    -webkit-transition-delay: 1000ms;
    transition-delay: 1000ms;
    -webkit-transition: opacity 2000ms ease, -webkit-transform 2000ms ease;
    transition: opacity 2000ms ease, -webkit-transform 2000ms ease;
    transition: transform 2000ms ease, opacity 2000ms ease;
    transition: transform 2000ms ease, opacity 2000ms ease,
      -webkit-transform 2000ms ease;
    @media (min-width: 768px) {
        font-size: 60px;
        margin-bottom: 40px;
    }
      @media (min-width: 992px) {
        margin-bottom: 40px;
        font-size: 70px;      
    }
    @media (min-width: 1200px) {
        font-size: 110px;
    }
  }

  & p {
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    margin: 0;
    letter-spacing: 2px;
    opacity: 0;
    -webkit-transform: translateY(-120px);
    transform: translateY(-120px);
    -webkit-transition-delay: 0;
    transition-delay: 0;
    -webkit-transition: opacity 2000ms ease, -webkit-transform 2000ms ease;
    transition: opacity 2000ms ease, -webkit-transform 2000ms ease;
    transition: transform 2000ms ease, opacity 2000ms ease;
    transition: transform 2000ms ease, opacity 2000ms ease,
      -webkit-transform 2000ms ease;
  }

  & a {
    opacity: 0;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    -webkit-transition-delay: 2500ms;
    transition-delay: 2500ms;
    -webkit-transition: opacity 2000ms ease, color 500ms ease,
      background 500ms ease, -webkit-transform 2000ms ease;
    transition: opacity 2000ms ease, color 500ms ease, background 500ms ease,
      -webkit-transform 2000ms ease;
    transition: transform 2000ms ease, opacity 2000ms ease, color 500ms ease,
      background 500ms ease;
    transition: transform 2000ms ease, opacity 2000ms ease, color 500ms ease,
      background 500ms ease, -webkit-transform 2000ms ease;
  }

  @media (min-width: 768px) {
        .swiper-button-next {
            right: 30px;
        }
        .swiper-button-prev {
            left: 30px;
        }
    }

    @media (min-width: 1200px) {
        .swiper-button-next {
            right: 60px;
        }
        .swiper-button-prev {
            left: 60px;
        }
    }
`;
