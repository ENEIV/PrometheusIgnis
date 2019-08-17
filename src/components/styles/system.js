import styled from "styled-components"
import css from "@styled-system/css"

export const Text = styled("p")(
  css({
    fontSize: [2, 2, 3, 4, 4],
  })
)

export const BlockText = styled("p")(
  css({
    fontSize: [4, 4, 5, 6],
    mt: 3,
    mb: 1,
    pl: 3,
    fontWeight: 900,
    color: `light-green`,
    textTransform: `uppercase`,
  })
)

export const ArticleCard = styled("div")(
  css({
    margin: 1,
    padding: 2,
  })
)

export const ArticleText = styled("p")(
  css({
    width: `9/10`,
    margin: `auto`,
    fontSize: 2,
    color: "dark-grey",
  })
)

export const ArticleImg = styled("img")(
  css({
    width: `2/5`,
  })
)

export const Display = styled("h3")(
  css({
    fontSize: [6, 6, 6, 7, 7, 7],
    fontWeight: 900,
    color: `light-green`,
    textTransform: `uppercase`,
  })
)

export const Mail = styled("form")(
  css({
    textAlign: `center`,
    margin: 3,

    input: {
      color: `white`,
      padding: `0.25em 1em 0.25em 0.75em`,

      fontSize: [3, 3, 3, 3, 5],
      borderStyle: `none`,
      background: `linear-gradient(90deg, #038b66, #00b886)`,
    },
    button: {
      color: `white`,
      margin: `0.5rem`,
      padding: `0.25rem 1rem`,

      fontSize: [3, 3, 3, 3, 5],
      borderStyle: `none`,
      background: `linear-gradient(90deg, #00b886, #038b66)`,
    },
  })
)

export const BlockQuote = styled("blockquote")(
  css({
    width: `75%`,
    verticalAlign: `top`,
    display: `inline-block`,
    p: {
      margin: `0.5rem`,
      padding: `0.5rem`,

      fontSize: [3, 3, 4, 5],
      fontWeight: `700`,
      background: `linear-gradient(90deg, #038b66, #00b886)`,
    },
    footer: {
      fontSize: 2,
      margin: `0 1.5rem`,
      display: `inline-block`,
      padding: `0 0.5em`,
      backgroundColor: `white`,
      color: `#111111`,
    },
  })
)
