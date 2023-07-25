/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";

import {meipalyPaginations} from "../assets/styles/Paginations.style";

const Paginations = () => {
  return (
    <div css={meipalyPaginations} className="text-center">
      <a className="prev" href="#">
        <i className="fa fa-angle-left"></i>
      </a>
      <span className="current">01</span>
      <a href="#">02</a>
      <a href="#">5</a>
      <a className="next" href="#">
        <i className="fa fa-angle-right"></i>
      </a>
    </div>
  );
};

export default Paginations;
