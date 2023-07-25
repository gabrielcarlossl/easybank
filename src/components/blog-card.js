/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { jsx } from '@emotion/react'

import { 
  latestBlogItem,
  lbiThumb,
  lbiDetails
 }  from '../assets/styles/BlogCard.styles'

const BlogCard = ({ data }) => {
  const { image, title, url, date } = data;
  return (
    <div css={latestBlogItem}>
      <div css={lbiThumb}>
        <img src={image} alt={title} />
      </div>
      <div css={lbiDetails}>
        <Link className="lbid_date" to={url}>
          {date}
        </Link>
        <h2>
          <Link to={url}>{title}</Link>
        </h2>
        <Link className="learnM" to={url}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
