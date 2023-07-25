/** @jsx jsx */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ServicePostTwoData } from "@/data";
import ServiceCardTwo from "@/components/service-card-two";
import { jsx } from "@emotion/react";
import {
  serviceSection,
  customColumn,
} from "../assets/styles/ServiceTwo.styles";
import {
  secTitle,
  white,
  subtitle,
  redColor,
  secDesk,
  colorAaa,
  commonSection
} from "../assets/styles/layout.styles";

const color = "darkgreen";

const ServiceTwo = () => {
  const { sectionContent, posts } = ServicePostTwoData;
  const { title, subTitle, text } = sectionContent;
  return (
    <section css={[serviceSection,commonSection]}>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h4 css={[subtitle, redColor]}>{subTitle}</h4>
            <h2 css={[secTitle, white]}>{title}</h2>
            <p css={[secDesk, colorAaa]}>{text}</p>
          </Col>
        </Row>
        <Row css={customColumn}>
          {posts.map((data, index) => (
            <Col key={index} lg={3} md={6} sm={12}>
              <ServiceCardTwo data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceTwo;
