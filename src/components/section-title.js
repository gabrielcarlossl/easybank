/** @jsx jsx */
import React, { Fragment } from "react";
import { jsx } from "@emotion/react";

import {
  secTitle,
  subtitle,
  secDesk
} from "../assets/styles/layout.styles";

const SectionTitle = ({ data }) => {
  const { title, subTitle, text } = data;
  return (
    <Fragment>
      <h4 css={subtitle}>{subTitle}</h4>
      <h2 css={secTitle}>{title}</h2>
      <p  css={secDesk}>{text}</p>
    </Fragment>
  );
};

export default SectionTitle;
