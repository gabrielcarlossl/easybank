/** @jsx jsx */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import BlogCard from "@/components/blog-card";
import { BlogHomeSection, BlogData } from "@/data";
import { jsx } from '@emotion/react'

import { blog }  from '../assets/styles/BlogHome.styles'

import { commonSection }  from '../assets/styles/layout.styles'

const BlogHome = () => {
  return (
    <section css={[commonSection,blog]}>
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={BlogHomeSection} />
          </Col>
        </Row>
        <Row>
          {BlogData.slice(0, 3).map((post, index) => (
            <Col lg={4} sm={12} md={6} key={index}>
              <BlogCard data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogHome;
