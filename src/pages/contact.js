import React from 'react'
import {
  Form,
  FormGroup,
  Input,
  FormText,
  Container,
  Col,
  Button,
} from 'reactstrap'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/layout'
import { SlideInRight } from '../styles'

const StyledForm = styled(Form)`
  max-width: ${960 / 16}rem;
  background-color: #fff;
  margin-top: 3rem;
  border-radius: 15px;
`
const MapWrapper = styled.div`
  max-width: ${960 / 16}rem;
  background-color: #fff;
  border-radius: 15px;
`

const Contact = () => (
  <Layout>
    <SlideInRight className="pt-5">
      <Container>
        <StyledForm className="mx-auto p-5 shadow-lg">
          <h2 className="font-weight-lighter mb-5 text-info text-center">
            Reach out to us
          </h2>
          <FormGroup>
            <Input
              type="name"
              name="name"
              placeholder="Enter your name"
              className="shadow-sm"
            />
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="shadow-sm"
              />
            </Col>
            <Col sm={6}>
              <Input
                type="phone"
                name="phone"
                placeholder="Phone Number"
                className="shadow-sm"
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <FormText color="muted">
              Addtional information may be entered here below
            </FormText>
            <Input type="textarea" name="text" className="shadow-sm" />
          </FormGroup>
          <Button className="shadow-sm" color="info" block>
            Submit
          </Button>
        </StyledForm>
        <div className="h2 font-weight-lighter py-5 text-center text-dark">
          OR
        </div>
        <MapWrapper className="p-5 mx-auto mb-5 shadow-lg">
          <h2 className="font-weight-lighter mb-5 text-info text-center">
            Come visit us!
          </h2>
          <iframe
            height="450"
            frameborder="0"
            className="border-light w-100 shadow-sm"
            src="https://www.google.com/maps/embed/v1/place?q=2176-2177%2C%2012th%20Main%20Rd%2C%20L%20Block%2C%20Mullai%20Colony%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040&key=AIzaSyC-2ukmFKYk-501yUVbZlnqU5iwXtqlDRg"
            allowfullscreen
          />
          <address className="text-center mt-3">
            Plot #2177/2, Rajparis Apartments,
            <br />
            Lakshmi Manere, 12th Main Road, <br />
            Anna Naggar, Chennai - 600 040 <br />
            Phone: 044-26204422
          </address>
        </MapWrapper>
      </Container>
    </SlideInRight>
  </Layout>
)

export default Contact
