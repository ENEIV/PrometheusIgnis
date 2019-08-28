import styled from "styled-components"
import css from "@styled-system/css"

// -------------------- TEXTS ------------------ //
export const Text = styled("p")(
  css({
    fontSize: [2, 2, 3, 4, 4, 7, 7, 11],
  })
)

export const BlockText = styled("p")(
  css({
    fontSize: [4, 4, 5, 6, 8, 9, 12, 14],
    mt: 3,
    mb: 1,
    pl: 3,
    fontWeight: 900,
    color: `light-green`,
    textTransform: `uppercase`,
  })
)

export const Display = styled("h1")(
  css({
    fontSize: [6, 6, 6, 7, 7, 8, 11, 14],
    fontWeight: 900,
    color: `light-green`,
    textTransform: `uppercase`,
  })
)

// -------------------- ARTICLES ------------------ //

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

// -------------------- FORMS -------------------- //

export const Mail = styled("form")(
  css({
    textAlign: `center`,
    margin: 3,

    input: {
      color: `white`,
      padding: `0.25em 1em 0.25em 0.75em`,

      fontSize: [3, 3, 3, 3, 5, 5, 7, 10],
      borderStyle: `none`,
      background: `linear-gradient(90deg, #038b66, #00b886)`,
    },
    button: {
      color: `white`,
      margin: `0.5rem`,
      padding: `0.25em 1em`,

      fontSize: [3, 3, 3, 3, 5, 5, 7, 10],
      borderStyle: `none`,
      background: `linear-gradient(90deg, #00b886, #038b66)`,
    },
  })
)

// -------------------- QUOTES -------------------- //

export const QuoteContainer = styled("div")(
  css({
    width: [10, 10, 10, 10, 6],
  })
)

export const BlockQuote = styled("blockquote")(
  css({
    width: `75%`,
    verticalAlign: `top`,
    display: `inline-block`,
    p: {
      margin: `0.5em`,
      padding: `0.5em`,

      fontSize: [3, 3, 4, 5, 5, 6, 9, 12],
      fontWeight: `700`,
      background: `linear-gradient(90deg, #038b66, #00b886)`,
    },
    footer: {
      fontSize: [2, 2, 2, 2, 4, 4, 6, 9, 10],
      margin: `0 1.5em`,
      display: `inline-block`,
      padding: `0 0.5em`,
      backgroundColor: `white`,
      color: `#111111`,
    },
  })
)

// -------------------- EXPLORE -------------------- //

export const ExploreContainer = styled("div")(
  css({
    width: [9, 9, 9, 9, 6],
    margin: `2em auto`,
    textAlign: `center`,
    p: {
      fontSize: [3, 3, 3, 3, 5, 5, 7, 10],
    },
    button: {
      color: `white`,
      margin: `0.75em`,
      padding: `0.5em 3em`,
      backgroundColor: `black`,
      borderColor: `#038b66`,
      "&: hover": {
        backgroundColor: `#038b66`,
        transition: `500ms,`,
      },
    },
  })
)
