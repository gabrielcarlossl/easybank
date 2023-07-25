/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ServicePostThreeData } from "@/data";
import ServiceCardThree from "@/components/service-card-three";
import { jsx } from '@emotion/react'

import {
  whatWeDo2,
} from "../assets/styles/ServiceThree.styles";

import {
  commonSection,
  subtitle,
  secTitle,
  secDesk
} from "../assets/styles/layout.styles";

const ServiceThree = () => {
  const { sectionContent, posts } = ServicePostThreeData;
  const { title, subTitle, text } = sectionContent;
  return (
    <section css={[commonSection,whatWeDo2]}>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 css={subtitle}>{subTitle}</h4>
            <h2 css={secTitle}>{title}</h2>
            <p css={secDesk}>{text}</p>
          </Col>
        </Row>
        <Row>
          {posts.map((post, index) => (
            <Col lg={4} md={12} key={index}>
              <ServiceCardThree data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceThree;
