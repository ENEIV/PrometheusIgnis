import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

import { ThemeProvider } from "styled-components"
import { theme, GlobalStyle } from "../styles"

const Layout = ({ children }) => {
  //-------------------- STATE -------------------- //
  //-------------------- QUERY -------------------- //
  const data = useStaticQuery(graphql`
    query siteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  //-------------------- METHODS -------------------- //

  //-------------------- RENDER -------------------- //
  return (
    <>
      <GlobalStyle />
      <Header />
      <ThemeProvider theme={theme}>
        <div>
          <main>{children}</main>
          <Footer siteTitle={data.site.siteMetadata.title} />
        </div>
      </ThemeProvider>
    </>
  )
}

//-------------------- PROPS -------------------- //
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
