import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap'
import Layout from '../components/layout'
import Logo from '../components/logo'
import { SlideInBottom } from '../styles'
import SEO from '../components/seo'
import CaptchaForm from '../components/captcha-form-detailed'
import db from '../firebase'
import lurnable from '../images/lurnable.jpg'
import exa51 from '../images/exportisea51.jpg'
import exa52 from '../images/exportisea52.jpg'
import exp4 from '../images/exp_broc_4.jpg'
import exp44 from '../images/exp_broc_44.jpg'
import mouseMat from '../images/mouse-mat.png'
import nationalityMix from '../images/nationality-mix.jpg'
import arsenal from '../images/arsenal.jpg'

const CourseStyles = styled.main`
  .hero {
    height: calc(100vh - 54px);
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
    object-position: left bottom;
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

  .rounded-xl {
    border-radius: 15px;
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }

  .video-container iframe,
  .video-container object,
  .video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

function handleSubmit(value) {
  db.collection('exportise')
    .add(value)
    .then(() => {
      window.location.href = '/brochure.pdf'
    })
    .catch(error => {
      console.log(error)
      window.location.href = '/brochure.pdf'
    })
}

const Banner = ({ src, alt, className = '' }) => (
  <img
    src={src}
    alt={alt}
    className={`img-fluid rounded-xl shadow my-5 ${className}`}
  />
)

const Courses = () => (
  <Layout>
    <SEO title="Courses" />
    <CourseStyles>
      <div className="hero">
        <StaticQuery
          query={graphql`
            query {
              aboutImg: file(name: { eq: "summer-kid" }) {
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
        {/* <img src={bgImg} className="w-100 h-100 img" alt="" /> */}
        <div className="overlay" />
        <h1 className="p-5 text-white font-weight-lighter">Summer Programme</h1>
      </div>
      <SlideInBottom>
        <Container className="py-3">
          <div className="py-5 d-flex flex-column justify-content-center align-items-center">
            <Logo size={3} />
            <div className="font-weight-light text-dark text-center text-uppercase pt-5">
              In association with
            </div>
            <img src={lurnable} alt="" className="img-fluid" />
          </div>

          <Banner src={exa51} alt="" />
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XqUhvSyu6eA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Banner src={exa52} alt="" />
            <Banner src={exp4} alt="" />
            <Banner src={exp44} alt="" />
            <Banner src={mouseMat} alt="" />
            <Banner src={nationalityMix} alt="" />
          </div>
        </Container>
        <img src={arsenal} alt="" className="d-block w-100 my-3" />
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="video-container m-2">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fthQuTdnWT0"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="video-container m-2">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oIblPUYmcGQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="video-container m-2">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/_MoXk_kdN64"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
          <hr className="my-5" />
          <h2 className="font-weight-lighter my-4 text-info">
            Prices for 2019
          </h2>
          <p>
            <strong>Basic Programme</strong> – £1240 per week
          </p>
          <p>This is inclusive of</p>
          <ul>
            <li>
              15 hours of English tuition per week and 15 hours of coaching
            </li>
            <li>Progress report and end of course certificate</li>
            <li>Full board, 3 meals per day</li>
            <li>Separate accommodation for boys and girls</li>
            <li>A comprehensive evening entertainment programme</li>
            <li>
              Two full-day excursions per weekend* (transport & Entrance fee
              included)
            </li>
            <li>Laundry service</li>
            <li>Exsportise drinking bottle and t-shirt.</li>
            <li>Comprehensive travel insurance</li>
          </ul>
          <p>*No excursions for students choosing to for stay only 1 week</p>
          <hr />
          <p>
            <strong>Courses with a Supplement</strong>
          </p>
          <table className="table table-borderless table-hover">
            <tr>
              <td>Horse Riding Supplement</td>
              <td>£180 per week</td>
            </tr>
            <tr>
              <td>Golf Supplement</td>
              <td> £50 per week</td>
            </tr>
            <tr>
              <td>Optional Instrument Hire</td>
              <td>£50 per week</td>
            </tr>
            <tr>
              <td>Optional Cambridge Assessment English test</td>
              <td>£50</td>
            </tr>
          </table>
          <hr />
          <p>
            <strong>Transport</strong>
          </p>
          <p>
            An accompanied travel service is available from and to major
            international airports and the Eurostar main terminal in London at
            an additional charge
          </p>
          <table className="table table-borderless table-hover">
            <tr>
              <td>Standard Transfer</td>
              <td>£75 (one way)</td>
            </tr>
            <tr>
              <td>Golf Supplement</td>
              <td>£150 (one way)</td>
            </tr>
          </table>
          <hr className="my-5" />
          <h2 className="font-weight-lighter text-info">Download Brochure</h2>
          <CaptchaForm handleSubmit={handleSubmit} />
          <hr className="my-5" />
          <h2 className="font-weight-lighter text-info mb-3">Register Now!</h2>
          <Form
            name="exportise"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            <input type="hidden" name="form-name" value="exportise" />
            <FormGroup row>
              <Col sm={6}>
                <Input type="text" name="first-name" placeholder="First Name" />
              </Col>
              <Col sm={6}>
                <Input type="text" name="last-name" placeholder="Last Name" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={6}>
                <Input type="email" name="email" placeholder="Email" />
              </Col>
              <Col sm={6}>
                <Input type="phone" name="phone" placeholder="Phone Number" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Input type="text" name="address" placeholder="Your Address" />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="address"
                placeholder="How did you come to know?"
              />
            </FormGroup>
            <FormGroup row>
              <Col sm={4}>
                <Input
                  type="text"
                  name="child-name"
                  placeholder="Your child's name"
                />
              </Col>
              <Col sm={4}>
                <Input
                  type="date"
                  name="date-of-birth"
                  placeholder="Your child's date of birth"
                />
              </Col>
              <Col sm={4}>
                <Input type="text" name="gender" placeholder="Gender" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Input
                type="number"
                name="number-of-weeks"
                placeholder="No. of Weeks"
              />
            </FormGroup>

            <FormGroup tag="fieldset">
              <legend>Choose Program</legend>

              <FormGroup check>
                <Label check>
                  <Input type="radio" name="program" /> English + Sport
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="program" /> English + Dance
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="program" /> English + Music
                </Label>
              </FormGroup>
            </FormGroup>
            <Button className="shadow-sm" color="info" block>
              Submit
            </Button>
          </Form>
        </Container>
      </SlideInBottom>
    </CourseStyles>
  </Layout>
)

export default Courses
