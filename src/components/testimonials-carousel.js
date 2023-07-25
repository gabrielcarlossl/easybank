/** @jsx jsx */
import React, { useState } from "react";
import SwiperCore, { Autoplay, Thumbs, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsOneData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import "swiper/swiper-bundle.min.css";
import { jsx } from '@emotion/react'

import { 
  testimonial2,
  testimonialTab,
  testimonial2Thumb,
  testiCon,
  testiCarouselPagination
}  from '../assets/styles/TestimonialsCarousel.styles'

import { 
  commonSection,
  white,
  colorAaa,
  subtitle,secTitle
}  from '../assets/styles/layout.styles'

SwiperCore.use([Autoplay, Thumbs, Pagination]);

const TestimonialsOneCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 0,
    speed: 1400,
    pagination: {
      el: "#testimonials-carousel-pagination",
      type: "bullets",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
  };
  const { sectionContent, posts } = TestimonialsOneData;
  return (
    <section css={[commonSection,testimonial2]}>
      <Container>
        <Row css={testimonialTab}>
          <Col lg={5}>
            <h4 css={[subtitle,colorAaa]} >{sectionContent.subTitle}</h4>
            <h2 css={[secTitle,white]} >{sectionContent.subTitle}</h2>
            <Swiper
            css={testimonial2Thumb}
              id="testimonial_2_thumb"
              onSwiper={setThumbsSwiper}
              {...testimonialsThumbOptions}
            >
              {posts.map(({ name, designation, image }, index) => (
                <SwiperSlide key={index}>
                  <div className="control_item">
                    <a href={`#tab_${index}`} data-toggle="tab">
                      <span>
                        <img src={image} alt={name} />
                      </span>
                      <div className="author_detail">
                        <h5>{name}</h5>
                        <h6>{designation}</h6>
                      </div>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          <Col lg={7}>
            <div
              className="swiper-pagination"
              id="testimonials-carousel-pagination"
              css={testiCarouselPagination}
            ></div>
            <div className="tab-content">
              <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                {...testimonialsOptions}
              >
                {posts.map(({ content, date }, index) => (
                  <SwiperSlide key={index}>
                    <div css={testiCon}>
                      <p>{content}</p>
                      <span>{date}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialsOneCarousel;
