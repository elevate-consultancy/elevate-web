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
          className="shadow-sm"
          fixed="top"
          color="white"
          light
          expand="md"
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              <Logo size={0.75} />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} to="#">
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
