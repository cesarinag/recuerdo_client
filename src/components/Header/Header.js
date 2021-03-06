import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'

const authenticatedOptions = (
  <Dropdown>
    <Dropdown.Toggle id="dropdown-basic">
    options
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#change-pw">change password</Dropdown.Item>
      <Dropdown.Item href="#haikus">view haikus</Dropdown.Item>
      <Dropdown.Item href="#create-haiku">post haiku</Dropdown.Item>
      <Dropdown.Item href="#sign-out">sign out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">sign up</Nav.Link>
    <Nav.Link href="#sign-in">sign in</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">about</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="secondary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      haiku75.
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auhref">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
