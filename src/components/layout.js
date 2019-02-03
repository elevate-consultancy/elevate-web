import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import NavBar from '../components/nav-bar'
import 'bootstrap/dist/css/bootstrap.min.css'

const Layout = ({ children }) => (
  <React.Fragment>
    <NavBar />
    {children}
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
