/** @jsx jsx */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogSidebar from "@/components/blog-sidebar";
import SinglePostCard from "@/components/single-post-card";
import { jsx } from '@emotion/react'

import { commonSection }  from '../assets/styles/layout.styles'

const BlogDetails = () => {
  return (
    <section css={commonSection} className="blogDetails">
      <Container>
        <Row>
          <Col lg={8}>
            <SinglePostCard />
          </Col>
          <Col lg={4} className="sidebar">
            <BlogSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetails;
