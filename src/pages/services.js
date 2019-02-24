import React from 'react'
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap'

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

const Heading = styled.h1`
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

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Container className="py-3">
      <Heading className="pt-3 h1 font-weight-lighter text-center text-white">
        Services
      </Heading>
      <ServiceList>
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

export default Services
