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
  justify-content: center;
  align-items: center;
  background-color: #fff;
  animation: ${fadeOut} 1s 0.25s ease-in-out forwards;
`

const SplashScreen = () => (
  <SplashWrapper>
    <Logo />
  </SplashWrapper>
)

export default SplashScreen
