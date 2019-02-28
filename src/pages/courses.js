import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Container, Button } from 'reactstrap'
import Layout from '../components/layout'
import logo from '../images/luflogo.png'
import brochure from '../images/brochure.jpg'
import { SlideInBottom, SlideInRight } from '../styles'

const CourseStyles = styled.main`
  .hero {
    height: ${450 / 16}rem;
    position: relative;

    h1 {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  .img {
    position: absolute !important;
    z-index: -1;
  }

  img {
    object-position: top !important;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 25%,
      rgba(0, 0, 0, 0)
    );
  }

  .logo {
    height: 200px;
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .logo-text {
    color: #001d47;
  }

  .rounded-huge {
    border-radius: 15px;
  }
`

const Courses = () => (
  <Layout>
    <CourseStyles>
      <div className="hero">
        <StaticQuery
          query={graphql`
            query {
              aboutImg: file(name: { eq: "aircraft" }) {
                childImageSharp {
                  fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => {
            // console.log(data.aboutImg.childImageSharp.fluid)
            return (
              <Img
                fluid={data.aboutImg.childImageSharp.fluid}
                className="w-100 h-100 img"
              />
            )
          }}
        />
        <div class="overlay" />
        <h1 className="p-5 text-white font-weight-lighter">
          Aviation Training
        </h1>
      </div>
      <SlideInBottom>
        <Container className="py-3">
          <div className="logo-wrapper">
            <img src={logo} alt="" className="logo" />
            <div className="display-4 mb-5 logo-text">Lufthansa Technik</div>
          </div>
          <div className="mb-5">
            <h2 className="h3 text-info text-center">
              EASA Part 66 Aircraft Maintenance Engineer Licence Training Course
            </h2>
            ​
            <p className="text-justify">
              Get your Aircraft Maintenance Licence from a world market leader
              in Aircraft Maintenance Training. Lufthansa Technik Shannon and
              Brookfield Education and Training have signed a new partnership to
              help train and provide the next generation of aircraft maintenance
              engineering professionals.
            </p>
            <p className="text-justify">
              Registration is now open for our next course starting on 29th
              April 2019. As there is limited space, we encourage people to
              apply as soon as possible.
            </p>
            ​<p className="text-justify">Course price: €24,000 EUR.</p>
            <Button tag="a" href="#" color="info" size="lg" outline block>
              Download Brochure
            </Button>
          </div>
          <img
            className="img-fluid mb-5 rounded-huge shadow-lg"
            src={brochure}
            alt="brochure"
          />
        </Container>
      </SlideInBottom>
    </CourseStyles>
  </Layout>
)

export default Courses
