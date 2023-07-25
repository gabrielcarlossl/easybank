/** @jsx jsx */
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { FeatureTabData } from "@/data";
import { jsx } from '@emotion/react'

import {
  chooseUsTitle,
  chooseImg,
  whChoose
} from "../assets/styles/FeaturedTab1.styles";
import {
  commonSection,
} from "../assets/styles/layout.styles";


const FeatureTabOne = () => {
  const [active, setActive] = useState(1);
  const { sectionContent, posts } = FeatureTabData;
  return (
    <section css={commonSection}>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <div id="tabs">
          <Row>
            <Col lg={12}>
              <ul css={chooseUsTitle}>
                {posts.map(({ title }, index) => (
                  <li
                    key={index}
                    className={`${active === index ? "active" : " "}`}
                  >
                    <a
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        setActive(index);
                      }}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <div className="tab-content">
            {posts.map((post, index) => {
              return index === active ? (
                <div
                  className="tab-pane fade show active animated fadeIn"
                  id={`tes_tab_${index}`}
                  key={index}
                >
                  <Row
                    className={`${
                      0 === index % 2 ? " " : "flex-lg-row-reverse"
                    }`}
                  >
                    <Col lg={7}>
                      <div css={whChoose}>
                        <p>{post.content}</p>
                        <ul>
                          {post.lists.map(({ item }, index) => (
                            <li key={index}>
                              <i className="fa fa-check-square"></i> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Col>
                    <Col lg={5}>
                      <div css={chooseImg}>
                        <img src={post.image} alt={`chose_img-${index}`} />
                      </div>
                    </Col>
                  </Row>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeatureTabOne;
