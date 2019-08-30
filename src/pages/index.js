import React, { useState, useEffect } from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Athens from "../components/index/Athens"
import Posts from "../components/index/Posts"
import Quote from "../components/index/Quote"
import Explore from "../components/index/Explore"
import Join from "../components/index/Join"

const getWindowDimension = () => {
  const { innerWidth: width } = window
  return width
}
const useWindowDimension = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimension())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimension())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

const index = ({ data }) => {
  const width = useWindowDimension()

  return (
    <Layout>
      <SEO title="Home" />
      <Athens />
      <Posts viewportWidth={width} />
      <Quote />
      <Explore />
      <Join />
    </Layout>
  )
}

export default index
