/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  singleTM,
  tmImg,
  detailTM
} from "../assets/styles/TeamCarousel.styles";

const TeamCard = ({ data }) => {
  const { image, name, designation, url, socials } = data;
  return (
    <div css={singleTM}>
      <div css={tmImg}>
        <img src={image} alt={name} />
        <div className="tm_overlay">
          <div className="team_social">
            {socials.map(({ name, url }, index) => (
              <a key={index} href={url}>
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div css={detailTM}>
        <h5>{name}</h5>
        <h6>{designation}</h6>
      </div>
    </div>
  );
};

export default TeamCard;
