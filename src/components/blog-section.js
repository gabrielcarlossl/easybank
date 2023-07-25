/** @jsx jsx */
import { jsx } from '@emotion/react'
import { style } from '../assets/styles/Blog-section.style'
import { blogData } from '../data'
import BlogCard from './blog-card'
import { blogSection } from '../assets/styles/BlogCard.styles'
const BlogSection = () => {
  return (
    <div css={style}>
      <div className='blogContainer'>
        <h2>Latest Articles</h2>
        <div css={blogSection} style={{ display: 'flex', gap: '40px' }}>
          {blogData.map((data) => (
            <BlogCard data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
