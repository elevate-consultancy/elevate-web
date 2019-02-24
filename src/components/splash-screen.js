import React from 'react'
import Logo from './logo'
import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
  from {
    visibility: visible;
    opacity: 1;
  }
  to {
    visibility: hidden;
    opacity: 0;
  }
`

const SplashWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  /* animation: ${fadeOut} 1s 0.25s ease-in-out forwards; */
  z-index: 1031;
  transition: all 0.5s;
  opacity: ${props => (props.hide ? 0 : 1)};
  visibility: ${props => (props.hide ? 'hidden' : 'visible')};
`

const SplashScreen = ({ hide }) => (
  <SplashWrapper hide={hide}>
    <div className="h2 font-weight-light">Preparing ...</div>
    <Logo />
  </SplashWrapper>
)

export default SplashScreen
