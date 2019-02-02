import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Container
} from 'reactstrap'

const StyledContainer = styled(Container)`
  max-width: ${500/16}rem;

  h1 {
    letter-spacing: 5px;
    text-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }
`

const Quote = styled.blockquote`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
`

const CTA = () => (
  <React.Fragment>
    <StyledContainer 
      className="text-center d-flex flex-column justify-content-center align-items-center">
      <h1 
        className="display-4 font-weight-lighter text-uppercase text-white">
        Elevate Consultancy
      </h1>
      <p className="h2 font-weight-lighter text-white text-uppercase">Study Abroad Today</p>
      <Button 
        className="px-4 text-uppercase shadow-sm" 
        color="success" 
        size="lg">Get Started</Button>
    </StyledContainer>
    <Quote className="blockquote text-center shadow-lg p-5 w-100 m-0">
      <p class="mb-0">
        Education is the passport to the future, for tomorrow belongs to 
        those who prepare for it today.
      </p>
      <footer class="blockquote-footer">
        Malcolm X
      </footer>
    </Quote>
  </React.Fragment>
)

export default CTA
