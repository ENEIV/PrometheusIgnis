import React from "react"
import { ArticleCard, ArticleText } from "../styles"

const Post = ({ post }) => {
  return (
    <ArticleCard>
      <ArticleText>{post.article_text.post.text}</ArticleText>
    </ArticleCard>
  )
}

export default Post
