import React from "react"
import Pitch from "./Pitch"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImg from "gatsby-background-image"

const Athens = () => {
  const data = useStaticQuery(graphql`
    {
      heroImage: file(relativePath: { eq: "Athens.png" }) {
        childImageSharp {
          fluid(maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImg
      style={BackgroundStyle}
      Tag="div"
      fluid={data.heroImage.childImageSharp.fluid}
      backgroundColor={"#1D1D1D"}
    >
      <Pitch />
    </BackgroundImg>
  )
}

const BackgroundStyle = {
  height: `100vh`,
  display: `flex`,
}

export default Athens
