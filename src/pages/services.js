import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ServiceList = styled.div`
  background-color: rgba(255,255, 255, 0.85);
  max-width: ${960/16}rem;
`

const data = [
  {
    title: 'Career Counseling',
    items: [
      "Specialization",
      "Scores",
      "Right time to apply",
      "Expenditure",
      "University selection",
    ]
  },
  {
    title: "Guidance for English Test",
    items: [
      "Pearson Test of English (PTE)",
      "IELTS",
      "TOEFL",
    ]
  },
  {
    title: "Applicant Screening",
    items: [
      "Academic Excellence",
      "Behavioral Excellence",
    ]
  },
  {
    title: "Online Application",
    items: [
      "Filing",
      "University Application form",
      "Departmental Form",
      "Scholarship Forms",
      "Additional Forms",
    ]
  },
  {
    title: "Tracking",
    items:[
      "Contact International Education Department"
    ]
  },
  {
    title: "Complete Visa Guidance",
    items: [
      "Visa Fee",
      "Legal Check- Police Verification Certificate",
      "Visa Form filing",
      "Visa Appointment",
      "Guidance of Visa documentation ",
    ]
  },
  {
    title: "Post Visa Guidance",
    items: [
      "Flight Ticket Booking",
      "Accommodation",
    ]
  }
]


const Services = () => (
  <Layout>
    <SEO title="Services" />
    <Container className="py-3">
      <h3 className="py-4 display-4 text-center">Services</h3>
      <ServiceList className="shadow p-5 mb-5 mx-auto">
        {data.map(service => (
          <Row key={service.title} className="py-4">
            <Col sm={4}>
              <h4 className="font-weight-light">
                {service.title}
              </h4>
            </Col>
            <Col sm={8}>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        ))}
      </ServiceList>
    </Container>
  </Layout>
)

export default Services
