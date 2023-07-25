/** @jsx jsx */
import { css } from '@emotion/react'
import React from 'react'
import { jsx } from '@emotion/react'

export const inviteBtn = css`
  a {
    padding: 15px 40px;
    background-image: linear-gradient(to right, #33d35e, #2ab6d9);
    border-radius: 50px;
    font-weight: 500;
    color: #fff !important;
    white-space:nowrap;
    &:hover {
      cursor: pointer;
      filter: brightness(150%);
    }
  }
`

const RequestInviteButton = () => {
  return (
    <div css={inviteBtn}>
      <a>Request Invite</a>
    </div>
  )
}

export default RequestInviteButton
