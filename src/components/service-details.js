/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceSidebar from "@/components/service-sidebar";
import ServiceDetailsContent from "@/components/service-details-content";
import { jsx } from "@emotion/react";

import {
  serviceDetail
} from "../assets/styles/ServiceDetails.styles";

import {
  commonSection
} from "../assets/styles/layout.styles";

const ServiceDetails = () => {
  return (
    <section css={[commonSection,serviceDetail]}>
      <Container>
        <Row>
          <Col lg={8} md={12}>
            <ServiceDetailsContent />
          </Col>
          <Col lg={4} md={12} className="sidebar">
            <ServiceSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
