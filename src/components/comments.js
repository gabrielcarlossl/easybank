/** @jsx jsx */
import React, { Fragment } from "react";
import CommentCard from "@/components/comment-card";
import { BlogComments } from "@/data";
import { jsx } from '@emotion/react'

import { 
  commentsArea,
  commentForm
}  from '../assets/styles/Comments.styles'

import { 
  inputForm,
  commonBtn,
  redBg
}  from '../assets/styles/layout.styles'

const Comments = () => {
  return (
    <Fragment>
      <div css={commentsArea}>
        <h3>{BlogComments.length} Comments</h3>
        <ol>
          {BlogComments.map((post, index) => (
            <li key={index}>
              <CommentCard data={post} />
            </li>
          ))}
        </ol>
      </div>
      <div css={commentForm}>
        <h3>Leave a Comment</h3>
        <form action="#" method="post">
          <div className="row">
            <div className="col-lg-6">
              <input
                css={inputForm}
                required=""
                type="text"
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div className="col-lg-6">
              <input
                css={inputForm}
                required=""
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="col-lg-12">
              <textarea
                css={inputForm}
                required=""
                name="comment"
                placeholder="Write Message"
              ></textarea>
            </div>
          </div>
          <a css={[commonBtn, redBg]} href="#">
            <span>Send Message</span>
          </a>
        </form>
      </div>
    </Fragment>
  );
};

export default Comments;
