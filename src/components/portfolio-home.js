/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title";
import PortfolioCard from "@/components/portfolio-card";
import { PortfolioHomeData, PortfolioData } from "@/data";
import { jsx } from "@emotion/react";

import { porfolio, custom } from "../assets/styles/PortifolioHome.styles";
import { commonSection } from "../assets/styles/layout.styles";

const PortfolioHome = () => {
  const { sectionContent } = PortfolioHomeData;
  return (
    <section css={[commonSection,porfolio]}>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row id="Grid">
          <div css={custom}>
            <Row>
              {PortfolioData.map((post, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <PortfolioCard data={post} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioHome;
