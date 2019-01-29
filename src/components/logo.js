import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import logo from '../images/logo_primary.png'
import styled from 'styled-components'

const LogoWrapper = styled.div``
const LogoImg = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
`
const LogoText = styled.div`
  text-align: center;
  font-size: 3rem;
  letter-spacing: 5px;
  line-height: 1;
`

const Logo = () => (
  <LogoWrapper>
    <LogoImg src={logo} alt="" />
    <LogoText>ELEVATE</LogoText>
    <LogoText>CONSULTANCY</LogoText>
  </LogoWrapper>
)
export default Logo
