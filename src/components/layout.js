import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import PageTransition from 'gatsby-plugin-page-transitions'

const Layout = ({ children }) => (
  <PageTransition>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <div>{children}</div>}
    />
  </PageTransition>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout