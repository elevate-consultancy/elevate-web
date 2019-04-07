import React from 'react'
import { Button, Form, FormGroup, Input, Spinner, Label } from 'reactstrap'
import ReCAPTCHA from 'react-google-recaptcha'

class CaptchaFormDetailed extends React.Component {
  state = {
    captchaValue: '',
    email: '',
    name: '',
    phoneNumber: '',
    city: '',
    age: '',
    school: '',
    loading: false,
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  render() {
    // console.log(process.env.GATSBY_SITE_KEY)
    return (
      <Form
        onSubmit={e => {
          e.preventDefault()
          if (this.state.captchaValue) {
            this.setState({ loading: true })
            this.props.handleSubmit({
              email: this.state.email,
              name: this.state.name,
              phoneNumber: this.state.phoneNumber,
              city: this.state.city,
              age: this.state.age,
              school: this.state.school,
            })
          }
        }}
      >
        <FormGroup className="">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </FormGroup>
        <FormGroup className="">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email ID"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </FormGroup>
        <FormGroup className="">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            type="phone"
            name="phonel"
            onChange={this.handleChange}
            value={this.state.phone}
          />
        </FormGroup>
        <FormGroup className="">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            placeholder="City"
            type="text"
            name="city"
            onChange={this.handleChange}
            value={this.state.city}
          />
        </FormGroup>
        <FormGroup className="">
          <Label htmlFor="age">Child's Age</Label>
          <Input
            id="age"
            placeholder="Enter your child's age"
            type="number"
            name="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
        </FormGroup>
        <FormGroup className="">
          <Label htmlFor="school">Child's School</Label>
          <Input
            id="school"
            placeholder="Enter your child's school"
            type="text"
            name="school"
            onChange={this.handleChange}
            value={this.state.school}
          />
        </FormGroup>

        <FormGroup>
          <ReCAPTCHA
            sitekey={process.env.GATSBY_SITE_KEY}
            onChange={value => {
              this.handleChange({
                target: {
                  name: 'captchaValue',
                  value,
                },
              })
            }}
          />
        </FormGroup>
        {this.state.loading ? (
          <Spinner size="lg" color="primary" />
        ) : (
          <Button type="submit" color="info">
            Download Brochure
          </Button>
        )}
      </Form>
    )
  }
}

export default CaptchaFormDetailed
