/** @jsx jsx */
import React, { Fragment, useContext, useState, useEffect } from "react";
import { Global, css } from "@emotion/react"
import { Helmet } from "react-helmet";
import { SearchContext } from "@/context/search-context";
import { MenuContext } from "@/context/menu-context";
import SearchPopup from "@/components/search-popup";
import PopupMenu from "@/components/popup-menu";
import { Link as ScrollLink } from "react-scroll";
import { jsx } from '@emotion/react'

// import "typeface-oswald";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/animate.css";
import "@/css/font-awesome.min.css";
import "@/css/icons.css";
// import "@/css/preset.css";
// import "@/css/theme.css";
// import "@/css/responsive.css";

import { showIt }  from '../assets/styles/layout.styles'

const GlobalStyles = () => {
  return (
    <Global styles={css`
        @import url('https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700');

        body, html{
            margin: 0;
            padding: 0;
            font-family:Arial, Helvetica, sans-serif;
        }
        body{
            line-height: 32px;
            color: #818181;
            letter-spacing: 0.64px;
            font-size: 16px;
            font-family: 'Oswald', sans-serif;
            font-weight: 400;
            transition: all ease 400ms;
            -webkit-transition: all ease 400ms;
            -moz-transition: all ease 400ms;
            font-family:Arial, Helvetica, sans-serif;
        }

        /*------------------------------------------------------------------------------
        / 2. Typography Settings
        ------------------------------------------------------------------------------*/
        h1, h2, h3, h4, h5 h6{
            color: #000000;
            font-weight: 400;
            margin: 0 0 15px;
        }
        a{
            color: #000;
            text-decoration: none;
            transition: all ease 400ms;
            -webkit-transition: all ease 400ms;
            -moz-transition: all ease 400ms;
        }
        a:hover, a:focus{
            text-decoration: none;
            outline: 0;
        }
        a:focus{
            color: #fff;
        }
        ul li{
            margin: 0;
            padding: 0;
            list-style: none;
        }  

        @media(min-width: 1200px) {
            .container {
                max-width: 1200px;
            }
        }
    `} />
  )
}

const Layout = ({ PageTitle, children }) => {
  const { searchStatus } = useContext(SearchContext);
  const { menuStatus } = useContext(MenuContext);
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <Fragment>
      <Helmet>
        <title>
          {PageTitle}
        </title>
      </Helmet>
      <div id="wrapper">
      <GlobalStyles />
        {children}</div>
      {true === searchStatus ? <SearchPopup /> : null}
      {true === menuStatus ? <PopupMenu /> : null}

      {scrollTop === true ? (
        <ScrollLink
            css={showIt}
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top"
        >
          <i className="fa fa-angle-double-up"></i>
        </ScrollLink>
      ) : null}
    </Fragment>
  );
};

export default Layout;
