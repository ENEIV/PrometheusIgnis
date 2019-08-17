import React from "react"
import { Mail } from "../styles"

const Form = () => {
  return (
    <Mail>
      <input type="email" name="emailfield" placeholder="email@example.com" />
      <button type="submit">Enter</button>
    </Mail>
  )
}

export default Form
