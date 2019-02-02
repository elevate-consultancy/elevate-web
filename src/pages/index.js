import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SplashScreen from '../components/splash-screen'

import BgVideo from '../components/bg-video'
import CTA from '../components/cta'

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SplashScreen />
    <BgVideo />
    <Wrapper>
      <CTA />
    </Wrapper>
  </Layout>
)

export default IndexPage
