import React from "react"
import { QuoteContainer, BlockQuote } from "../styles"
import Seneca from "../images/Seneca"
import Nietzsche from "../images/Nietzsche"

const Quote = () => {
  return (
    <div>
      <QuoteContainer>
        <Seneca />
        <BlockQuote>
          <p>It's the power of the mind to be unconquerable.</p>
          <footer>— Seneca the Younger</footer>
        </BlockQuote>
      </QuoteContainer>
      <QuoteContainer style={{ marginLeft: `auto` }}>
        <BlockQuote>
          <p>That which does not kill me, makes me stronger.</p>
          <footer style={{ float: `right` }}>— Friedrich Nietzsche</footer>
        </BlockQuote>
        <Nietzsche />
      </QuoteContainer>
    </div>
  )
}

export default Quote
