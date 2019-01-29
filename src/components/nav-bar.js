import React from 'react'
import { Link } from 'gatsby'
import { Container } from '../styles'
import logo from '../images/logo_primary.png'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  background-color: #fff;

  .brand {
    img {
      max-width: 128px;
      margin: 0;
    }
  }

  .links {
    list-style: none;
    margin: 0;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;

    li {
      margin: 0;
    }

    li:not(:last-child) {
      margin-right: 5%;
    }
  }
`

const NavBar = () => (
  <Container>
    <Nav>
      <div className="brand">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <ul className="links">
        <li>
          <Link>About Us</Link>
        </li>
        <li>
          <Link>Courses</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </Nav>
  </Container>
)

export default NavBar
