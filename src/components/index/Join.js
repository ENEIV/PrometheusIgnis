import React from "react"
import styled from "styled-components"
import { BlockText } from "../styles"
import Form from "../index/Form"

const Join = () => {
  return (
    <JoinUs>
      <BlockText>Never go into battle alone, join the conversation.</BlockText>
      <Form />
    </JoinUs>
  )
}

const JoinUs = styled.div`
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  margin: 2rem 0;
`

export default Join
