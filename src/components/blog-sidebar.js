/** @jsx jsx */
import React, { Fragment } from "react";
import { BlogSidebarPost } from "@/data";
import { jsx } from "@emotion/react";

import {
  sidebarWidget,
  sidebarSearchWidget,
  sidebarSearchForm,
  sidebarWidgetTitle,
  meipalyPostWidget,
  meipalyCategorieWidget,
  meipalyTagcloudWidget,
  mpwItem
} from "../assets/styles/BlogSidebar.styles";

const BlogSidebar = () => {
  return (
    <Fragment>
      <aside css={[sidebarWidget,sidebarSearchWidget]}>
        <form method="post" action="#" css={sidebarSearchForm}>
          <input type="search" placeholder="Search here..." name="s" id="s" />
        </form>
      </aside>
      <aside css={sidebarWidget} className="recent_posts">
        <h3 css={sidebarWidgetTitle}>Latest Posts</h3>
        <div css={meipalyPostWidget}>
          {BlogSidebarPost.map(({ title, image, url }, index) => (
            <div css={mpwItem} key={index}>
              <img src={image} alt="" />
              <a href={url}>{title}</a>
            </div>
          ))}
        </div>
      </aside>
      <aside css={sidebarWidget} className="categories">
        <h3 css={sidebarWidgetTitle}>Categories</h3>
        <div css={meipalyCategorieWidget}>
          <ul>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Introductions</a>
            </li>
            <li>
              <a href="#">One Page Template</a>
            </li>
            <li>
              <a href="#">Parallax Effects</a>
            </li>
            <li>
              <a href="#">New Technologies</a>
            </li>
            <li>
              <a href="#">Video Backgrounds</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside css={sidebarWidget}>
        <h3 css={sidebarWidgetTitle}>Tags:</h3>
        <div css={meipalyTagcloudWidget}>
          <a href="#">Business,</a> <a href="#">Agency,</a>{" "}
          <a href="#">Digital,</a> <a href="#">Technology,</a>
          <a href="#">Parallax,</a> <a href="#">Innovative,</a>{" "}
          <a href="#">Professional,</a>
          <a href="#">Experience,</a>
        </div>
      </aside>
    </Fragment>
  );
};

export default BlogSidebar;
