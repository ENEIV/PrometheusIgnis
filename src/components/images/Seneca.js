import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Seneca = () => {
  const data = useStaticQuery(graphql`
    {
      quoteSeneca: file(relativePath: { eq: "Seneca.png" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.quoteSeneca.childImageSharp.fluid} style={ImgStyle} />
}

const ImgStyle = {
  width: `25%`,
  display: `inline-block`,
}

export default Seneca
