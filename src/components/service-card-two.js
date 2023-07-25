/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { jsx } from '@emotion/react'

import { 
  iconBox1,flipper
}  from '../assets/styles/ServiceTwo.styles'

const ServiceCardTwo = ({ data }) => {
  const { url, iconName, title } = data;
  return (
    <Link css={iconBox1} className="text-center" to={url}>
      <div css={flipper}>
        <div>
          <i className={iconName}></i>
          <h3>{title}</h3>
        </div>
        <div>
          <i className={iconName}></i>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCardTwo;
