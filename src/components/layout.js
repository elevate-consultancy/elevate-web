import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import PageTransition from 'gatsby-plugin-page-transitions'
import NavBar from '../components/nav-bar'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => (
  <PageTransition>
    <NavBar />    
    {children}
  </PageTransition>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
