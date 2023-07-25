/** @jsx jsx */
import React from "react";
import { jsx } from '@emotion/react'

import { 
  singleComment,
  authorDetails,
  comment,
  commentBt
}  from '../assets/styles/CommentCard.styles'

import { 
  commonBtn,
  redBg
}  from '../assets/styles/layout.styles'

const CommentCard = ({ data }) => {
  const { image, name, date, content } = data;
  return (
    <div css={singleComment}>
      <img src={image} alt="" />
      <div css={authorDetails}>
        <h5>
          <a href="#">{name}</a>
        </h5>
        <span>{date}</span>
      </div>
      <div css={comment}>
        <p>{content}</p>
      </div>
      <a css={[commonBtn, redBg, commentBt]}  href="#">
        <span>Reply</span>
      </a>
    </div>
  );
};

export default CommentCard;
