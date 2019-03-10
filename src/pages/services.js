import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Button,
} from 'reactstrap'

import { StaticQuery, graphql } from 'gatsby'

import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const slideInBottom = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translate(0);
    opacity: 1;
  }
`

const slideInRight = keyframes`
from {
  transform: translateX(-20px);
  opacity: 0;
}
to {
  transform: translate(0);
  opacity: 1;
}
`

const SlideInRight = styled.div`
  animation: ${slideInRight} 0.8s ease-in-out;
`

const ServiceList = styled.div`
  animation: ${slideInBottom} 1s 0.5s ease-in-out backwards;

  .round-borders {
    border-radius: 15px;
  }
`

const data = [
  {
    title: 'Career Counseling',
    items: [
      'Specialization',
      'Scores',
      'Right time to apply',
      'Expenditure',
      'University selection',
    ],
  },
  {
    title: 'Guidance for English Test',
    items: ['Pearson Test of English (PTE)', 'IELTS', 'TOEFL'],
  },
  {
    title: 'Applicant Screening',
    items: ['Academic Excellence', 'Behavioral Excellence'],
  },
  {
    title: 'Online Application',
    items: [
      'Filing',
      'University Application form',
      'Departmental Form',
      'Scholarship Forms',
      'Additional Forms',
    ],
  },
  {
    title: 'Tracking',
    items: ['Contact International Education Department'],
  },
  {
    title: 'Complete Visa Guidance',
    items: [
      'Visa Fee',
      'Legal Check- Police Verification Certificate',
      'Visa Form filing',
      'Visa Appointment',
      'Guidance of Visa documentation ',
    ],
  },
  {
    title: 'Post Visa Guidance',
    items: ['Flight Ticket Booking', 'Accommodation'],
  },
]

const Hero = styled.div``

const Services = () => {
  const slist = React.createRef()

  function handleClick() {
    window.scrollTo({
      top: slist.current ? slist.current.offsetTop : 0,
      behavior: 'smooth',
    })
  }

  return (
    <Layout>
      <SEO title="Services" />
      <Hero className="mb-5">
        <Container fluid>
          <Row>
            <Col className="bg-info text-white pb-5">
              <SlideInRight className="d-flex flex-column justify-content-center align-items-center h-100">
                <h1 className="font-weight-lighter p-5">Services</h1>
                <ul className="font-weight-light mb-4">
                  {data.map(service => (
                    <li className="mb-2" key={service.title}>
                      {service.title}
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  outline
                  color="light"
                  className="font-weight-lighter px-4"
                  onClick={handleClick}
                >
                  Read More
                </Button>
              </SlideInRight>
            </Col>
            <Col md={4} className="p-0">
              <StaticQuery
                query={graphql`
                  query {
                    aboutImg: file(name: { eq: "services-bg" }) {
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
            </Col>
          </Row>
        </Container>
      </Hero>
      <Container className="py-3">
        {/* <Heading className="pt-3 text-center text-dark">Services</Heading> */}
        <ServiceList ref={slist}>
          <Row className="p-5 mb-5">
            {data.map(service => (
              <Col lg={4} md={6} key={service.title} className="mb-4">
                <Card className="shadow-lg h-100 border-0 round-borders">
                  <CardBody>
                    <CardTitle className="font-weight-light">
                      {service.title}
                    </CardTitle>
                    <ul className="pl-3">
                      {service.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </ServiceList>
      </Container>
    </Layout>
  )
}
export default Services
