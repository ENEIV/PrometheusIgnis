import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const PageNotFound = () => {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>The route you have specified does not exist... the sadness</p>
    </Layout>
  )
}

export default PageNotFound
