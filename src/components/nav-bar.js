import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap'

import Logo from './logo'

const CustomNavbar = styled.div`
  .custom {
    background-color: rgba(248, 249, 250, 0.8) !important;
  }

  .spacing {
    letter-spacing: 2px;
  }
`

class NavBar extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () =>
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }))

  render() {
    return (
      <CustomNavbar>
        <Navbar
          // className="shadow-sm"
          // fixed="top"
          color={this.props.color || 'info'}
          dark
          expand="md"
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              <div className="font-weight-light text-uppercase spacing">
                Elevate Consultancy
              </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="/about">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="#">
                    Courses
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/services">
                    Services
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="#">
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/contact">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </CustomNavbar>
    )
  }
}

export default NavBar
