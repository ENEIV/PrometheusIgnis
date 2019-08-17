import React from "react"
import styled from "styled-components"
import Prometheus from "../images/Prometheus"
import Pitch from "./Pitch"
import BackgroundPrometheus from "../images/BackgroundPrometheus"

const Hero = ({ viewportWidth }) => {
  return (
    <>
      {viewportWidth > 425 ? (
        <HeroGrid>
          <div style={Resize}>
            <Pitch />
          </div>
          <div style={ResizeImg}>
            <Prometheus />
          </div>
        </HeroGrid>
      ) : (
        <BackgroundPrometheus />
      )}
    </>
  )
}

const HeroGrid = styled.div`
  display: grid;
  padding: 2rem 0;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
`

const Resize = {
  display: `inline-block`,
}

const ResizeImg = {
  width: `50%`,
  display: `inline-block`,
}
export default Hero
