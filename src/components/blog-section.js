/** @jsx jsx */
import { jsx } from '@emotion/react'
import { style } from '../assets/styles/Blog-section.style'
import { blogData } from '../data'
import BlogCard from './blog-card'
const BlogSection = () => {
  return (
    <div css={style}>
      <div style={{margin: '0px 15% 0px 15%'}}>
        <h2>Latest Articles</h2>
        <div style={{ display: 'flex', gap: '40px' }}>
          {blogData.map((data) => (
            <BlogCard data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
