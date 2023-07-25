/** @jsx jsx */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardOne from "@/components/service-card-one";
import { ServicePostData, ServiceHomeTwoData } from "@/data";
import SectionTitle from "./section-title";
import { jsx } from "@emotion/react";

import {
  commonSection
} from "../assets/styles/layout.styles";

const ServiceHomeTwo = () => {
  return (
    <section css={commonSection}>
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <SectionTitle data={ServiceHomeTwoData} />
          </Col>
        </Row>
        <Row>
          {ServicePostData.map((post, index) => (
            <Col lg={4} md={12} key={index}>
              <ServiceCardOne data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceHomeTwo;
