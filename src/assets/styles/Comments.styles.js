/** @jsx jsx */
import { css } from "@emotion/react";

export const commentsArea = css`
  position: relative;

  h3 {
    font-size: 30px;
    line-height: 0.8;
    letter-spacing: 1.2px;
    color: #000000;
    text-transform: uppercase;
    margin: 0 0 61px;
  }

  ol {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      display: block;
      margin: 0;
    }
  }
`;

export const commentForm = css`
  position: relative;
  h3 {
    font-size: 30px;
    line-height: 0.8;
    letter-spacing: 1.2px;
    color: #000000;
    text-transform: uppercase;
    margin: 0 0 61px;
  }
`;
