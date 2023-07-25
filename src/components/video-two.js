/** @jsx jsx */
import React, { Fragment, useState } from "react";
import { VideoTwoData } from "@/data";
import ModalVideo from "react-modal-video";
import SectionTitle from "@/components/section-title";
import "react-modal-video/css/modal-video.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { jsx } from '@emotion/react'

import { whatWedo, videoWrap, playVideo }  from '../assets/styles/Video.styles'

import {
  commonSection
} from "../assets/styles/layout.styles";

const VideoTwo = () => {
  const [isOpen, setOpen] = useState(false);
  const { sectionContent, video } = VideoTwoData;
  return (
    <Fragment>
      <section css={[whatWedo,commonSection]} className="pb-0 border-bottom-0">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <SectionTitle data={sectionContent} />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div css={videoWrap} className="mb-0">
                <img src={video.image} alt="" />
                <div css={playVideo}>
                  <a
                    className="video_popup"
                    onClick={e => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="#"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                  <h2>{video.title}</h2>
                </div>
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

export default VideoTwo;
