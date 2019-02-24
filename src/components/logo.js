import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import logo from '../images/logo_primary.png'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  width: ${props => props.size * 150}px;
`
const LogoImg = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;
  margin-bottom: 10px;
  filter: hue-rotate(300deg) brightness();
`
const LogoText = styled.div`
  text-align: center;
  font-size: ${props => props.size}rem;
  letter-spacing: ${props => props.size * 2}px;
  line-height: 1;
  color: #eee;
  font-weight: 100;
`

const Logo = ({ size = 3 }) => (
  <LogoWrapper size={size}>
    {/* <LogoImg src={logo} alt="" /> */}
    <LogoText size={size}>ELEVATE CONSULTANCY</LogoText>
  </LogoWrapper>
)
export default Logo
