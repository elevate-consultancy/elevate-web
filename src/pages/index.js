import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SplashScreen from '../components/splash-screen'

import CTA from '../components/cta'
import { StaticQuery, graphql } from 'gatsby'
// import FadeCarousel from '../components/fade-carousel'

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 101px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SplashScreen />
    <StaticQuery
      query={graphql`
        {
          allFile(filter: { name: { regex: "/^carousel/" } }) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 1200) {
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
      `}
      render={data => <div>hello</div>}
    />
    <Wrapper>
      <CTA />
    </Wrapper>
  </Layout>
)

export default IndexPage
