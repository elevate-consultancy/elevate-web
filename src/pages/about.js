import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { SlideInRight, SlideInBottom } from '../styles'
import logo from '../images/logo_primary.png'
import bg from '../images/backdrop.svg'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LogoImg = styled.img`
  filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.3));
  max-width: 100%;
`
const StyledRow = styled(Row)`
  border-radius: 15px;
  background-color: #fff;
  position: relative;
  overflow: hidden;

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`

const LargeSection = styled.div`
  width: 100%;
  padding-top: ${120 / 16}rem;
  padding-bottom: ${350 / 16}rem;
`

const HeroImageWrapper = styled(Row)`
  height: ${450 / 16}rem;
  margin-top: -${300 / 16}rem;
  border-radius: 15px;
  overflow: hidden;
`

const aboutContent = `
Most people dream about pursuing an education abroad. The desire to travel is always strong whether it’s the fascination to study advanced courses, learn about sophisticated technologies or make an avenue for a great career.
However, many students face various difficulties while planning a career. They usually choose a path with the intent to work in the field of their study. It’s only towards the completion of the course, the reality, that there are few to nil jobs available, smacks them hard. A few of the students hesitantly agree to further study abroad but end up hitting rock bottom. This is mainly because they do not know how to choose the right path nor have a trustworthy source to guide them in the right direction.
At Elevate consultancy, we believe that we would be able to help prospective students to achieve their dreams. From our personal experience and understanding of the job market, we will be able to suggest the right courses based on the individual’s interest, post-study perspective and financial strength to pursue higher studies.

`

const About = () => (
  <Layout>
    <SEO title="About us" />
    <LargeSection className="bg-info">
      <SlideInRight className="display-4 font-weight-lighter text-center text-white">
        Accomplish Your Dreams
      </SlideInRight>
    </LargeSection>
    <div className="bg-white">
      <SlideInBottom>
        <Container className="py-5">
          <HeroImageWrapper className="mb-5 shadow-lg">
            <StaticQuery
              query={graphql`
                query {
                  aboutImg: file(name: { eq: "about_bg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1200) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={data => {
                console.log(data.aboutImg.childImageSharp.fluid)
                return (
                  <Img
                    fluid={data.aboutImg.childImageSharp.fluid}
                    className="w-100 h-100"
                  />
                )
              }}
            />
          </HeroImageWrapper>
          <StyledRow className="shadow-lg p-5">
            <img src={bg} alt="" className="backdrop" />
            <Col
              lg={6}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <LogoImg src={logo} alt="" className="d-block mx-auto" />
              <h2 className="text-info font-weight-lighter py-3 h1">
                Elevate Consultancy
              </h2>
            </Col>
            <Col lg={6}>
              <div className="font-weight-light text-justify text">
                {aboutContent}
              </div>
            </Col>
          </StyledRow>
        </Container>
      </SlideInBottom>
    </div>
  </Layout>
)

export default About
