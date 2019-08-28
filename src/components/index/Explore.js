import React from "react"
// import styled from "styled-components"
import { ExploreContainer } from "../styles"

const Explore = () => {
  return (
    <>
      <ExploreContainer>
        <p>
          Explore the insights and lessons provided by the greatest minds
          throughout history. Read accounts of the world through the lens of the
          great philosophers.
        </p>
        <button>Explore</button>
      </ExploreContainer>
    </>
  )
}

// const CtoA = styled.div`
//   width: 90%;
//   margin: 2em auto;
//   text-align: center;

//   button {
//     color: white;
//     margin: 0.75em;
//     padding: 0.5em 3em;
//     background-color: black;
//     border-color: #038b66;
//     &: hover {
//       background-color: #038b66;
//       transition: 500ms;
//     }
//   }
//   @media screen and (min-width: 768px) {
//     width: 60%;
//   }
//   @media screen and (min-width: 1024px) {
//     width: 75%;
//   }
//   @media screen and (min-width: 1440px) {
//     width: 60%;
//   }
// `

export default Explore
