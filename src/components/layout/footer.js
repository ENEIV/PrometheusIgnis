import React from "react"
import PropTypes from "prop-types"

const Footer = ({ siteTitle }) => {
  //-------------------- STATE -------------------- //
  //-------------------- QUERY -------------------- //
  //-------------------- METHODS -------------------- //
  //-------------------- RENDER -------------------- //
  return (
    <footer>
      © {new Date().getFullYear()} | {siteTitle}
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
