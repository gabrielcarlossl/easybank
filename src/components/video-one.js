/** @jsx jsx */
import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { VideoOneData } from "@/data";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import { jsx } from '@emotion/react'

import { 
  ourWork ,
  videoWrap2,
  abDetailWrap,
  playVideo
}  from '../assets/styles/VideoOne.styles'
import {
  commonSection,
} from "../assets/styles/layout.styles";

const VideoOne = () => {
  const [isOpen, setOpen] = useState(false);
  const { sectionContent, video } = VideoOneData;
  return (
    <Fragment>
      <section css={[commonSection, ourWork]}>
        <div css={videoWrap2}>
          <img src={video.image} alt={video.title} />
          <div css={playVideo}>
            <a
              onClick={e => {
                e.preventDefault();
                setOpen(true);
              }}
              href="#"
              className="video_popup"
            >
              <i className="fa fa-play"></i>
            </a>
            <h2>{video.title}</h2>
          </div>
        </div>
        <Container>
          <Row>
            <Col lg={6} sm={12}></Col>
            <Col lg={6} sm={12}>
              <div css={abDetailWrap}>
                <SectionTitle data={sectionContent} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {(typeof(window) !== 'undefined') && <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        videoId="672843429"
        />
        }
    </Fragment>
  );
};

export default VideoOne;
