import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Button, Container } from 'reactstrap'

const slideInRight = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
`

const slideInLeft = keyframes`
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
`

const slideInBottom = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
`

const StyledContainer = styled(Container)`
  h1 {
    letter-spacing: 5px;
    text-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    animation: ${slideInRight} 1s 0.5s ease-in-out backwards;
  }
  p {
    animation: ${slideInLeft} 1s 0.5s ease-in-out backwards;
  }
  .slide-in-bottom {
    animation: ${slideInBottom} 0.5s 1.5s ease-in-out backwards;
  }
`
const CTA = () => (
  <React.Fragment>
    <StyledContainer className="text-center d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-4 font-weight-lighter text-uppercase text-white">
        Elevate Consultancy
      </h1>
      <p className="h2 font-weight-lighter text-white text-uppercase">
        Study Abroad Today
      </p>
      <Button
        className="px-4 text-uppercase shadow-sm slide-in-bottom font-weight-lighter"
        color="info"
        size="lg"
      >
        Get Started
      </Button>
    </StyledContainer>
  </React.Fragment>
)

export default CTA
