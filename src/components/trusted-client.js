/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { TrustClientData } from "@/data";
import { jsx } from "@emotion/react";

import {
  trustClient,
  clContent,
  abcInner,
  abcContent
} from "../assets/styles/TrustClient.styles";

import {
  commonSection,
  pb120,
  commonBtn,
  redBg
} from "../assets/styles/layout.styles";

const TrustedClient = ({ extraClassName }) => {
  const { image, title, text, url } = TrustClientData;
  return (
    <section css={[commonSection,trustClient,pb120]} className={`${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div css={clContent}>
              <img src={image} alt="" />
              <div css={abcInner}>
                <div className="row">
                  <div className="col-lg-5 col-sm-12 col-md-5"></div>
                  <div className="col-lg-7 col-sm-12 col-md-7">
                    <div css={abcContent}>
                      <h2>{title}</h2>
                      <p>{text}</p>
                      <Link to={url} css={[commonBtn,redBg]}>
                        <span>Learn More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedClient;
