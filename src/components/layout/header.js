import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => {
  //-------------------- STATE -------------------- //
  //-------------------- QUERY -------------------- //
  //-------------------- METHODS -------------------- //

  //-------------------- RENDER -------------------- //
  return (
    <Menu>
      <h1>Prometheus</h1>
      <ul>
        <li>
          <Link exact to="/">
            Home
          </Link>
        </li>
        <li>
          <Link exact to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </Menu>
  )
}

const Menu = styled.div`
  z-index: 100;
  position: fixed;
`

export default Header
