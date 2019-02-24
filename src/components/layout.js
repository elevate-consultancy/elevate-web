import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './layout.css'
import NavBar from '../components/nav-bar'
import 'bootstrap/dist/css/bootstrap.min.css'

const Mtop = styled.div`
  margin-top: 100px;
`

const Layout = ({ children, color }) => (
  <React.Fragment>
    <NavBar color={color} />
    {children}
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
