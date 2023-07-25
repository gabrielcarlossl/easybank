/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { jsx } from "@emotion/react";

import { ready, ready2 } from "../assets/styles/CallToActionOne.styles";
import {
  secTitle,
  white,
  commonSection,
  commonBtn,
  redBg
} from "../assets/styles/layout.styles";

const CallToActionOne = ({ extraClassName, buttonClass }) => {
  return (
    <section css={extraClassName == 'ready_2' ? [ready2,commonSection] : [ready,commonSection]}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-sm-8 col-md-9">
            <h2 css={[secTitle, white]}>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
          </div>
          <div className="col-lg-3  col-sm-4 col-md-3 text-right">
            <Link to="/contact" css={[commonBtn,redBg]} className={`${buttonClass}`}>
              <span>Lorem Ipsum</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;
