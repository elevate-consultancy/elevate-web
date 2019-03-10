import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Button, Container } from 'reactstrap'
import { Link } from 'gatsby'

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
    padding-top: 25%;
    letter-spacing: 5px;
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    animation: ${slideInRight} 1s 0.5s ease-in-out backwards;
  }
  p {
    animation: ${slideInLeft} 1s 0.5s ease-in-out backwards;
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  .slide-in-bottom {
    animation: ${slideInBottom} 0.5s 1.5s ease-in-out backwards;
  }
`
const CTA = () => (
  <React.Fragment>
    <StyledContainer className="text-center d-flex flex-column align-items-center">
      <h1 className="display-4 text-uppercase text-white">
        Elevate Consultancy
      </h1>
      <p className="h2  text-white text-uppercase mb-3">Study Abroad Today</p>
      <Button
        className="px-4 text-uppercase shadow-sm slide-in-bottom "
        color="info"
        size="lg"
        tag={Link}
        to="/courses"
      >
        Get Started
      </Button>
    </StyledContainer>
  </React.Fragment>
)

export default CTA
