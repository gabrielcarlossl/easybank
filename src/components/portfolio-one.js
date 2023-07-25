/** @jsx jsx */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PortfolioData } from "@/data";
import PortfolioCard from "@/components/portfolio-card";
import { jsx } from "@emotion/react";

import { porfolio, custom } from "../assets/styles/PortifolioHome.styles";
import {
  commonSection,
  commonBtn,
  redBg
} from "../assets/styles/layout.styles";

const PortfolioOne = () => {
  return (
    <section css={commonSection}>
      <Container>
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
        <Row>
          <Col lg={12} className="text-center">
            <a css={[commonBtn,redBg]} href="#">
              <span>Load More</span>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioOne;
