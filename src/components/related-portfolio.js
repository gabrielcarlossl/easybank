/** @jsx jsx */
import React from "react";
import { PortfolioData } from "@/data";
import PortfolioCard from "@/components/portfolio-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { jsx } from "@emotion/react";

import { relatedPortfolio } from "../assets/styles/RelatedPortfolio.styles";

import {
  commonSection,
  secDesk,
  secTitle,
  subtitle
} from "../assets/styles/layout.styles";

const RelatedPortfolio = () => {
  const carouselOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <section css={[commonSection, relatedPortfolio]}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 css={subtitle}>Lorem ipsum</h4>
            <h2 css={secTitle}>related work</h2>
            <p css={secDesk}>
              We are committed to providing our customers with exceptional
              service while
              <br /> offering our employees the best training.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper className="related_slider" {...carouselOptions}>
              {PortfolioData.map((post, index) => (
                <SwiperSlide key={index}>
                  <PortfolioCard data={post} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPortfolio;
