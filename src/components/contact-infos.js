/** @jsx jsx */
import React from "react";
import { ContactInfosBlock, ContactInfosList } from "@/data";
import { jsx } from "@emotion/react";


import {
  commonSection,
  secDesk,
  secTitle,
  subtitle,
} from "../assets/styles/layout.styles";

import {
  singleClient2
} from "../assets/styles/ContactInfos2.styles";

const ContactInfos = () => {
  const { subTitle, title, description } = ContactInfosBlock;
  return (
    <section css={commonSection} className="client_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 css={subtitle}>{subTitle}</h4>
            <h2 css={secTitle}>{title}</h2>
            <p css={secDesk}>{description}</p>
          </div>
        </div>
        <div className="row">
          {ContactInfosList.map(({ title, infos }, index) => (
            <div
              className="col-lg-3 col-sm-6 col-md-3"
              key={`contact-infos-${index}`}
            >
              <div css={singleClient2}>
                <h3>{title}</h3>
                {infos.map(({ name }, index) => (
                  <p key={`contact-infos-list-${index}`}>{name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfos;
