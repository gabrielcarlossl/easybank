/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'

import { 
  pageBanner,
  bannerContent
}  from '../assets/styles/PageBanner.styles'

const PageBanner = ({ title, name }) => {
  return (
    <section css={pageBanner}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div css={bannerContent} className="banner_content text-center">
              <h4>
                <a href="/">home</a> - {name}
              </h4>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
