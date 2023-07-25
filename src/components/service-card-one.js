/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { jsx } from '@emotion/react'

import {
  iconBox2,
  iconWrap
} from "../assets/styles/ServiceOne.styles";

const ServiceCardOne = ({ data }) => {
  const { title, text, iconName, url } = data;
  return (
    <div css={iconBox2} className="text-center">
      <h3>{title}</h3>
      <p>{text}</p>
      <div css={iconWrap}>
        <i className={iconName}></i>
      </div>
      <Link to={url}>Lorem ipsum dolor</Link>
    </div>
  );
};

export default ServiceCardOne;
