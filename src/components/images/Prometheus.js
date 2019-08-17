import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Prometheus = () => {
  const data = useStaticQuery(graphql`
    {
      heroImage: file(relativePath: { eq: "Prometheus.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.heroImage.childImageSharp.fluid} style={BoxShadow} />
}

const BoxShadow = {
  boxShadow: `20px 20px 0 #19a974`,
}

export default Prometheus
