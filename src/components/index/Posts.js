import React from "react"
import { RichText } from "prismic-reactjs"
import { StaticQuery, graphql } from "gatsby"

const articlesQuery = graphql`
  {
    prismic {
      allArticles {
        edges {
          node {
            title
            text
          }
        }
      }
    }
  }
`

const Posts = ({ doc }) => (
  <div>
    <StaticQuery
      query={articlesQuery}
      render={data =>
        data.prismic.allArticles.edges.map((article, index) => (
          <h3 key={`ArticleTitle:${index}`}>
            Hello
            <RichText render={article.title} />
          </h3>
        ))
      }
    />
  </div>
)

export default Posts
