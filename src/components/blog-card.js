/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from '@emotion/react'

import {
  latestBlogItem,
  lbiThumb,
  lbiDetails,
} from '../assets/styles/BlogCard.styles'

const BlogCard = ({ data }) => {
  const { img, author, title, resume } = data
  return (
    <div data-aos='fade-up' css={latestBlogItem}>
      <div css={lbiThumb}>
        <img src={img} alt={title} />
      </div>

      <div className='blogCardContent'>
        <span>By {author}</span>

        <div css={lbiDetails}>
          <h2>
            <Link to='#'>{title}</Link>
          </h2>
        </div>
        <p>{resume}</p>
      </div>
    </div>
  )
}

export default BlogCard
