import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
import logo from '../images/logo_primary.png'
import styled, { keyframes } from 'styled-components'

const LogoWrapper = styled.div`
  width: ${props => props.size * 150}px;
`

const white50 = `rgba(255, 255, 255, 0.4)`
const cycleRight = keyframes`
  from {
    transform: translateX(-15%);
  }

  to {
    transform: translateX(100%);
  }
`

const ImgWrapper = styled.div`
  position: relative;

  .shine {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      100deg,
      transparent 0px,
      transparent 30px,
      ${white50} 30px,
      ${white50} 45px,
      transparent 45px,
      transparent 100%
    );
    animation: ${cycleRight} 2s infinite linear;
  }
`
const LogoImg = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
  margin-bottom: 10px;
`
const LogoText = styled.div`
  text-align: center;
  font-size: ${props => props.size}rem;
  letter-spacing: ${props => props.size * 2}px;
  line-height: 1;
`

const Logo = ({ size = 3 }) => (
  <LogoWrapper size={size}>
    <ImgWrapper>
      <LogoImg src={logo} alt="" />
      <div className="shine" />
    </ImgWrapper>
    <LogoText className="font-weight-lighter text-info" size={size}>
      ELEVATE CONSULTANCY
    </LogoText>
  </LogoWrapper>
)
export default Logo
