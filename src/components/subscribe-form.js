/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscribeFormData } from "@/data";
import { jsx } from '@emotion/react'

import { subscribeFrom, subscribe }  from '../assets/styles/Subscribe.styles'
import {
  secTitle,
  subtitle,
  commonSection,
  commonBtn,
  redBg
} from "../assets/styles/layout.styles";

const SubscribeForm = () => {
  const { sectionContent } = SubscribeFormData;
  return (
    <section css={[commonSection,subscribe]} className="subscribe">
      <Container>
        <Row>
          <Col lg={4}>
            <h4 css={subtitle}>{sectionContent.subTitle}</h4>
            <h2 css={secTitle}>{sectionContent.title}</h2>
          </Col>
          <Col lg={8}>
            <form action="" method="post" css={subscribeFrom}>
              <input type="email" placeholder="Enter your email" name="email" />
              <button css={[commonBtn,redBg]} type="submit" name="submit">
                <span>Subscribe now</span>
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeForm;
