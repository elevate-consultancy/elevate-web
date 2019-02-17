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
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledForm = styled(Form)`
  max-width: ${800 / 16}rem;
`

const Contact = () => (
  <Layout>
    <h3 className="display-4 text-center py-5">Contact Us</h3>
    <Container>
      <StyledForm className="mx-auto">
        <FormGroup>
          <Input type="name" name="name" placeholder="Enter your name" />
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
          <FormText color="muted">
            Addtional information may be entered here below
          </FormText>
          <Input type="textarea" name="text" />
        </FormGroup>
        <Button className="shadow-sm" color="info" block>
          Submit
        </Button>
      </StyledForm>
    </Container>
  </Layout>
)

export default Contact
