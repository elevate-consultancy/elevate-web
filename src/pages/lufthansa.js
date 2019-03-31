import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
// import Img from 'gatsby-image'
import { Container } from 'reactstrap'
import Layout from '../components/layout'
import logo from '../images/luflogo.png'
import { SlideInBottom } from '../styles'
import SEO from '../components/seo'
import bgImg from '../images/lufthansa.jpg'
import CaptchaForm from '../components/captcha-form'
import db from '../firebase'
import test1 from '../images/testimonials1.jpg'
import test2 from '../images/testimonials2.jpg'

const CourseStyles = styled.main`
  .hero {
    height: ${600 / 16}rem;
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
    object-position: bottom;
    object-fit: cover;
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

  .smaller {
    max-width: ${800 / 16}rem;
  }
`

function handleSubmit(value) {
  const userRef = db.collection('lufthansa').doc(value)
  userRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        return userRef.set({
          count: doc.data().count + 1,
        })
      } else {
        return userRef.set({ count: 1 })
      }
    })
    .then(() => {
      window.location.href = '/brochure.pdf'
    })
    .catch(error => {
      console.log(error)
      window.location.href = '/brochure.pdf'
    })
}

const Courses = () => (
  <Layout>
    <SEO title="Courses" />
    <CourseStyles>
      <div className="hero">
        {/* <StaticQuery
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
        /> */}
        <img src={bgImg} className="w-100 h-100 img" alt="" />
        <div className="overlay" />
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
            <h2 className="h3 text-info text-center mb-3">
              EASA Part 66 Aircraft Maintenance Engineer Licence Training Course
            </h2>
            <p className="text-justify">
              Only 32 people in the world get the opportunity to be part of
              Lufthansa's premium Aero-engineering program per year and work in
              the core field across the World ! Would you like to be among the
              32 in the world ?
            </p>
            <p className="text-justify">
              Currently <strong>95%</strong> of all new engineers have been
              placed!
            </p>
            <p className="text-justify">
              Get your Aircraft Maintenance Licence from a world market leader
              in Aircraft Maintenance Training. Lufthansa Technik Shannon and
              Brookfield Education and Training have signed a new partnership to
              help train and provide the next generation of aircraft maintenance
              engineering professionals.
            </p>
            <p className="text-justify">
              Registration is now open for our next course starting on 30th
              September 2019. As there is limited space, we encourage people to
              apply as soon as possible.
            </p>
            ​<p className="text-justify">Course price: €24,000 EUR.</p>
            <CaptchaForm handleSubmit={handleSubmit} />
          </div>

          <div className="mb-5 d-flex flex-column align-items-center">
            <h3 className="text-info mb-5 display-4 font-weight-lighter">
              Testimonials
            </h3>
            <img
              src={test1}
              className="smaller img-fluid rounded-lg shadow-lg mb-sm-3"
              alt="testimonials"
            />

            <img
              src={test2}
              alt="testimonials"
              className="smaller img-fluid rounded-lg shadow-lg"
            />
          </div>
        </Container>
      </SlideInBottom>
    </CourseStyles>
  </Layout>
)

export default Courses
