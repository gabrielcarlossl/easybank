/** @jsx jsx */
import React from "react";
import { AboutTwoData } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { 
  abAgency,
  pr79,
  mb45,
  abImg
}  from '../assets/styles/AboutTwo.styles'
import {
  secTitle,
  subtitle,
  secDesk,
  commonSection,
  commonBtn,
  redBg
} from "../assets/styles/layout.styles";

const AboutTwo = () => {
  const { sectionContent, button, gallery } = AboutTwoData;
  return (
    <section css={[commonSection,abAgency]}>
      <Container>
        <Row>
          <Col css={pr79} lg={6} md={6} sm={12}>
            <h4 css={subtitle}>{sectionContent.subTitle}</h4>
            <h2 css={[secTitle, mb45]}>{sectionContent.title}</h2>
            <p css={secDesk}>{sectionContent.text}</p>
            <a css={[commonBtn,redBg]} href={button.url}>
              <span>{button.label}</span>
            </a>
          </Col>
          <Col lg={6} md={6} sm={12}>
            {gallery.map((item, index) => (
              <div css={abImg} className={`ab_img${index + 1}`} key={index}>
                <img src={item} alt="" />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
