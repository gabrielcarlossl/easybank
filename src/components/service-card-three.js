/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { jsx } from '@emotion/react'

import { 
  singleWedo
}  from '../assets/styles/ServiceThree.styles'

const ServiceCardThree = ({ data }) => {
  const { title, image, url } = data;
  return (
    <div css={singleWedo}>
      <img src={image} alt={title} />
      <div className="overlay_wedo">
        <Link to={url}>{title}</Link>
      </div>
    </div>
  );
};

export default ServiceCardThree;
