/** @jsx jsx */
import React, { Fragment } from "react";
import { jsx } from '@emotion/react'

import {
  sidebarWidget,
  sidebarWidgetTitle,
  meipalyCategorieWidget
} from "../assets/styles/BlogSidebar.styles";
import {
  meipalyServicesHelp
} from "../assets/styles/ServiceSidebar.styles";

const ServiceSidebar = () => {
  return (
    <Fragment>
      <aside css={sidebarWidget}>
        <h3 css={sidebarWidgetTitle}>Lorem</h3>
        <div css={meipalyCategorieWidget}>
          <ul>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
            <li>
              <a href="#">Lorem ipsum</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside css={sidebarWidget}>
        <div css={meipalyServicesHelp}>
          <h4>Lorem ipsum dolor sit</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet libero in augue volutpat varius.</p>
          <h2>666 888 000</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
