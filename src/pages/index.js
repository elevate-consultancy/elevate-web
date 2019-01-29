import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import SplashScreen from '../components/splash-screen'
import NavBar from '../components/nav-bar'
import { FluidWrapperDrop } from '../styles'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SplashScreen />
    <FluidWrapperDrop>
      <NavBar />
    </FluidWrapperDrop>
  </Layout>
)

export default IndexPage
