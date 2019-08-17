import React from "react"
import styled from "styled-components"
import { Text } from "../styles"

const Explore = () => {
  return (
    <CtoA>
      <Text>
        Explore the insights and lessons provided by the greatest minds
        throughout history. Read accounts of the world through the lens of the
        great philosophers.
      </Text>
      <button>Explore</button>
    </CtoA>
  )
}

const CtoA = styled.div`
  width: 90%;
  margin: 2rem auto;
  text-align: center;

  button {
    color: white;
    margin: 0.75rem;
    padding: 0.5rem 3rem;
    background-color: black;
    border-color: #038b66;
    &: hover {
      background-color: #038b66;
      transition: 500ms;
    }
  }
`
export default Explore
