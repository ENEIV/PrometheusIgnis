import React from "react"
import { RichText } from "prismic-reactjs"
import { StaticQuery, graphql } from "gatsby"

const articlesQuery = graphql`
  query {
    prismic {
      allArticless(uid: "prometheus-prismic-testing-1") {
        edges {
          node {
            article_title
          }
        }
      }
    }
  }
`

const Posts = () => (
  // const doc = data.prismic.allArticless.edges.slice(0, 1).pop()
  // if (!doc) return null
  <StaticQuery
    query={articlesQuery}
    render={data => (
      <h1>{RichText.render(data.prismic.edges.node.article_title)}</h1>
    )}
  />
)

export default Posts
