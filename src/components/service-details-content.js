/** @jsx jsx */
import React from "react";
import serviceS1 from "@/images/s1.jpg";
import serviceS2 from "@/images/s2.jpg";
import { jsx } from "@emotion/react";

import {
  serviceDetail,
  serviceArea,
  gaping
} from "../assets/styles/ServiceDetails.styles";

const ServiceDetailsContent = () => {
  return (
    <div css={serviceArea}>
      <img src={serviceS1} alt="" />
      <h2>Lorem ipsum dolor</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet libero in augue volutpat varius. Proin at elit ac nibh facilisis fermentum sit amet at mauris. Nunc sed ipsum malesuada, lacinia risus vitae, blandit ex. Curabitur aliquet nec tortor eget blandit.
      </p>
      <div className="row" css={gaping}>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} alt="" />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>Lorem ipsum dolor</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>Lorem ipsum dolor
            </li>
            <li>
              <i className="fa fa-check-square"></i>Lorem ipsum dolor
            </li>
            <li>
              <i className="fa fa-check-square"></i>Lorem ipsum dolor
            </li>
            <li>
              <i className="fa fa-check-square"></i>Lorem ipsum dolor
            </li>
            <li>
              <i className="fa fa-check-square"></i>Lorem ipsum dolor
            </li>
          </ul>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet libero in augue volutpat varius. Proin at elit ac nibh facilisis fermentum sit amet at mauris. Nunc sed ipsum malesuada, lacinia risus vitae, blandit ex. Curabitur aliquet nec tortor eget blandit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet libero in augue volutpat varius. Proin at elit ac nibh facilisis fermentum sit amet at mauris. Nunc sed ipsum malesuada, lacinia risus vitae, blandit ex. Curabitur aliquet nec tortor eget blandit.</p>
    </div>
  );
};

export default ServiceDetailsContent;
