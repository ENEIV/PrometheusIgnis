import React from "react"
import styled from "styled-components"
import { Display, Text } from "../styles"
import Form from "./Form"

const Pitch = () => {
  return (
    <CtoA>
      <Display>READ.LEARN.CONQUER.</Display>
      <Text>
        Join a community of like-minded individuals learning from the greatest
        inventors and thinkers throughout history. Join the conversation,
        newsletter sent every Sunday.
      </Text>
      <Form />
    </CtoA>
  )
}

const CtoA = styled.div`
  margin: auto;
  text-align: center;
  p {
    width: 92.5%;
    margin: auto;
    font-weight: 500;
  }
  @media screen and (min-width: 550px) {
    width: 70%;
  }
`

export default Pitch
