import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Pitch from "../index/Pitch"

const BackgroundPrometheus = () => {
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

  return (
    <BackgroundImage
      style={BackgroundStyle}
      Tag="div"
      fluid={data.heroImage.childImageSharp.fluid}
      backgroundColor={"#1D1D1D"}
    >
      <Pitch />
    </BackgroundImage>
  )
}

const BackgroundStyle = {
  height: `100vh`,
  display: `flex`,
}

export default BackgroundPrometheus
