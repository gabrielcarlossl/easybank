/** @jsx jsx */
import React, { useContext, Fragment, useRef } from "react";
import { Link } from "gatsby";
import { MenuContext } from "@/context/menu-context";
import { LogoImage, NavLinks } from "@/data";
import { jsx } from '@emotion/react'

import { 
  showOverlayNav,
  popUpMenu,
  closepopUp,
  footerContacts,
  popUpSocial,
  logo2,
  popUpInner,
  dlMenuWrap,
  subMenu,
  popUp
}  from '../assets/styles/PopUpMenu.styles'

const PopupMenu = () => {
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const menuEl = useRef(null);
  const handleMenuClick = e => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  return (
    <div className="show-overlay-nav" css={showOverlayNav}>
      <div className="popup popup__menu" css={[popUp,popUpMenu]}>
        <a
          href=""
          id="close-popup"
          onClick={handleMenuClick}
          css={closepopUp}
        ></a>
        <div className="container mobileContainer">
          <div className="row">
            <div className="col-lg-12 text-left">
              <div css={logo2}>
                <Link to="/">
                  <img src={LogoImage.light} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div css={popUpInner} className="popup-inner">
                <nav css={dlMenuWrap}
                  className="popup-menu dl-menu__wrap text-center"
                  ref={menuEl}
                >
                  <ul>
                    {NavLinks.map((links, index) => {
                      return (
                        <li
                          key={index}
                          className={`${
                            undefined !== links.subItems
                              ? "menu-item-has-children"
                              : ""
                          }`}
                        >
                          <Link to={links.url}>{links.name}</Link>
                          {undefined !== links.subItems ? (
                            <Fragment>
                              <button
                                onClick={e => {
                                  menuEl.current
                                    .querySelectorAll(".sub-menu")
                                    .forEach(item => {
                                      item.classList.remove("show");
                                    });

                                  let clickedItem = e.currentTarget.parentNode;
                                  clickedItem
                                    .querySelector(".sub-menu")
                                    .classList.toggle("show");
                                }}
                              >
                                <i className="fa fa-angle-down"></i>
                              </button>
                              <ul css={subMenu} className="sub-menu">
                                {links.subItems.map((subLinks, index) => (
                                  <li key={index}>
                                    <Link to={subLinks.url}>
                                      {subLinks.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Fragment>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 text-center text-md-left">
              <ul css={footerContacts}>
                <li>Phone: 666 888 000</li>
                <li>Email: needhelp@meipaly.com</li>
                <li>
                  Address: 66 Broklyn Street, New York United States of America
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div css={popUpSocial} className="text-center text-md-right">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupMenu;
