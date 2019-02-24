import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SplashScreen from '../components/splash-screen'

import CTA from '../components/cta'
import BgVideo from '../components/bg-video'
// import { StaticQuery, graphql } from 'gatsby'
// import FadeCarousel from '../components/fade-carousel'

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 56px);
  display: flex;
  /* justify-content: center;
  align-items: center; */
`

class IndexPage extends React.Component {
  state = {
    hide: false,
  }

  videoLoaded = () => this.setState({ hide: true })
  render() {
    return (
      <Layout color="none">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <SplashScreen hide={this.state.hide} />
        {/* <StaticQuery
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
      render={data => <FadeCarousel data={data} />}
    /> */}
        <BgVideo onLoad={this.videoLoaded} />
        <Wrapper>
          <CTA />
        </Wrapper>
      </Layout>
    )
  }
}

export default IndexPage
