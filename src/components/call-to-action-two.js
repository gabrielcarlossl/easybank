/** @jsx jsx */
import React from "react";
import { CallToActionTwoData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "gatsby";
import { jsx } from '@emotion/react'

import { btnLink }  from '../assets/styles/GoogleMap.styles'
import { noPadding }  from '../assets/styles/layout.styles'
import { bgBlack }  from '../assets/styles/CallToActionTwo.styles'

const CallToActionTwo = () => {
  return (
    <section className="noPadding">
      <Container fluid>
        <Row>
          {CallToActionTwoData.map(({ label, url }, index) => {
            return (
              <Col lg={6} md={6} css={noPadding} key={index}>
                <div
                css={0 === index % 2 ? [btnLink,bgBlack] : btnLink}
                >
                  <Link to={url}>{label}</Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default CallToActionTwo;
