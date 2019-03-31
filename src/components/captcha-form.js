import React from 'react'
import { Button, Form, FormGroup, Input, Spinner } from 'reactstrap'
import ReCAPTCHA from 'react-google-recaptcha'

class CaptchaForm extends React.Component {
  state = {
    captchaValue: '',
    email: '',
    loading: false,
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  render() {
    // console.log(process.env.GATSBY_SITE_KEY)
    return (
      <Form
        inline
        onSubmit={e => {
          e.preventDefault()
          if (this.state.captchaValue) {
            this.setState({ loading: true })
            this.props.handleSubmit(this.state.email)
          }
        }}
      >
        <FormGroup className="mr-sm-2 flex-grow-1">
          <Input
            id="email"
            placeholder="Enter your email ID"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.value}
            className="flex-grow-1"
          />
        </FormGroup>

        <FormGroup className="mr-sm-2">
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
          <Button type="submit" color="info" outline>
            Download Brochure
          </Button>
        )}
      </Form>
    )
  }
}

export default CaptchaForm
