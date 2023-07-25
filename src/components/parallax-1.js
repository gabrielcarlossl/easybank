/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ParallaxOneData } from "@/data";
import { jsx } from '@emotion/react'

import { 
  testimonial,
  testimonialContent
 }  from '../assets/styles/ParallaxOne.styles'

 import {
  commonSection
} from "../assets/styles/layout.styles";

const ParallaxOne = () => {
  const { iconName, title, specialText, text } = ParallaxOneData;
  return (
    <section css={[testimonial,commonSection]}>
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }} sm={12} className="text-center">
            <div css={testimonialContent}>
              <div>
                <i className={iconName}></i>
              </div>
              <h2>
                {title}
                <span>{specialText}</span>
              </h2>
              <p>{text}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ParallaxOne;
