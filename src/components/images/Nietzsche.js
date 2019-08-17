import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Nietzsche = () => {
  const data = useStaticQuery(graphql`
    {
      quoteNietzsche: file(relativePath: { eq: "Nietzsche.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img fluid={data.quoteNietzsche.childImageSharp.fluid} style={ImgStyle} />
  )
}

const ImgStyle = {
  width: `25%`,
  display: `inline-block`,
}

export default Nietzsche
