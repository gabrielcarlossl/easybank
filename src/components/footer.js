/** @jsx jsx */
import { LogoImage } from "@/data";
import { jsx } from "@emotion/react";

import {
  footer1,
  widget,
  aboutWidget,
  contactWidget,
  copyright,
  socialWidget
} from "../assets/styles/Footer.styles";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer css={footer1}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside css={[widget,aboutWidget]}>
              <a href="/">
               
              </a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet libero in augue volutpat varius. Proin at elit ac nibh facilisis fermentum sit amet at mauris.</p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside css={[widget,contactWidget]}>
              <h3 className="widget_title">Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet
                <br />
                Lorem ipsum dolor sit amet
              </p>
              <p>P: 666 888 000</p>
              <p>
                E: <a href="#">lore@ipsum.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside css={[widget,socialWidget]}>
              <h3 className="widget_title">lorem</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div css={copyright}>
              Lorem ipsum dolor {new Date().getFullYear()} by{" "}
              <a href="#">ipsum dolor</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
