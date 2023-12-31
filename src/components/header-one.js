/** @jsx jsx */
import { useState, useEffect, useContext } from "react";
import { LogoImage, NavLinks } from "@/data";
import { Col, Container, Row } from "react-bootstrap";
import { MenuContext } from "@/context/menu-context";
import { Link } from "gatsby";
import { jsx } from '@emotion/react'
import closeIcon from '../assets/images/icon-close.svg'

import { 
  header,
  inviteBtn,
  logo,
  mainMenu,
  navigator 
}  from '../assets/styles/Header.styles'
import RequestInviteButton from './request-invite-button';


const HeaderOne = () => {
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);

  const [toggle, setToggle] = useState(false)
  
  const handleMenuClick = e => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  const handleToggleClick = () => {
    if (toggle) {
      setToggle(false)
    } else{
      setToggle(true)
    }
  }

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header css={header}
      className={`${
        true === sticky ? "fixedHeader animated flipInX" : null
      }`}
      id="header"
    >
      
      <Container fluid>
        <Container style={{ display: 'flex',flexWrap: 'nowrap'}} className="justify-content-between header">
          <Col style={{padding: 0, display: 'grid'}} className="col-6" lg={2} md={3} sm={3}>
            <div style={{justifySelf: 'flex-start'}} css={logo}>
              <Link to="/">
                <img src={LogoImage.light} alt="" />
              </Link>
            </div>
          </Col>
          <Col lg={8} sm={8} md={7} className="d-none d-lg-block ">
            <nav css={mainMenu} className="text-center">
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
                    </li>
                  );
                })}
              </ul>
            </nav>
          </Col>
          <Col css={inviteBtn}>
           <RequestInviteButton />
          </Col>
          <Col lg={2} md={2} sm={4} className="col-6">
            <div css={navigator} className="text-right">
              <a
                href="#"
                className="menu mobilemenu d-none d-lg-none"
              >
                <i className="mei-menu"></i>
              </a>
              <a
                id="open-overlay-nav"
                className="menu hamburger"
                onClick={handleMenuClick}
                href="#"
              >
                <i onClick={handleToggleClick} style={{display: `${toggle ? 'none' : 'flex'}`}} className="mei-menu"></i>
                <img onClick={handleToggleClick} style={{display: `${toggle ? 'flex' : 'none'}`, marginRight: '10px'}} src={closeIcon} alt="" />
              </a>
            </div>
          </Col>
        </Container>
      </Container>
    </header>
  );
};

export default HeaderOne;
