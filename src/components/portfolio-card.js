/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  singleFolio,
  folioHover,
  cate,
} from "../assets/styles/PortfolioCard.styles";
const PortfolioCard = ({ data }) => {
  const { image, title, categories, url } = data;

  return (
    <div css={singleFolio}>
      <img src={image} alt={title} />
      <div css={folioHover}>
        <a css={cate} href="#">
          {categories.map((cat) => cat + ", ")}
        </a>
        <h4>
          <a href={url}>{title}</a>
        </h4>
      </div>
    </div>
  );
};

export default PortfolioCard;
