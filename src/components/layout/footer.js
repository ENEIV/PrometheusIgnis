import React from "react"
import PropTypes from "prop-types"
import { Text } from "../styles"

const Footer = ({ siteTitle }) => {
  //-------------------- STATE -------------------- //
  //-------------------- QUERY -------------------- //
  //-------------------- METHODS -------------------- //
  //-------------------- RENDER -------------------- //
  return (
    <footer style={FooterStyle}>
      <Text>
        © {new Date().getFullYear()} | {siteTitle}
      </Text>
    </footer>
  )
}

const FooterStyle = {
  margin: `0.5em`,
  fontWeight: `500`,
  textTransform: `uppercase`,
  textAlign: `center`,
}

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
